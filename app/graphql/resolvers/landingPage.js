const schema = require('../validation');
const { yupValidation, getLanguageIdByCode } = require('./common');

const handleLandingPage = async (language, details, { models }) => {
    yupValidation(schema.landingPage.input, {
        language,
        details
    });

    let result = false;
    await models.sequelize.transaction(async t => {
        details.id = 1;
        await models.landingPage.upsert(details, { transaction: t });
        details.landingPageId = details.id;
        details.languageId = await getLanguageIdByCode(models, language);
        await models.landingPageText.upsert(details, { transaction: t });
        result = true;
    });

    return { status: result };
}

const landingPage = async (language, { models }) => {
    yupValidation(schema.landingPage.one, { language });

    return models.landingPage.findOne({
        where: { id: 1 },
        ...includeForFind(await getLanguageIdByCode(models, language))
    });
}

const includeForFind = (languageId) => {
    return {
        include: [
            { association: 'i18n', where: { languageId } }
        ]
    };
}

module.exports = {
    handleLandingPage,
    landingPage
};