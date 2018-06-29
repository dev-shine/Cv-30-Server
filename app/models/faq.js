'use strict';
module.exports = (Sequelize, DataTypes) => {
	var Faq = Sequelize.define('faq', {
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
		companyId: {
			allowNull: false,
			type: DataTypes.UUID,
			validate: {
                isUUID: 4
            },
			field: 'company_id',
		},
		createdAt: {
			allowNull: false,
			type: DataTypes.DATE,
			field: 'created_at'
		},
		updatedAt: {
			allowNull: false,
			type: DataTypes.DATE,
			field: 'updated_at'
		}
	},  {
		timestamps: true,
		updatedAt: 'updated_at',
		createdAt: 'created_at'
	});
	Faq.associate = models => {
		Faq.belongsTo(models.company, { as: 'company', foreignKey: 'company_id' });
		Faq.hasMany(models.faqText, { as: 'i18n', foreignKey: 'company_id' });
	};
	return Faq;
};