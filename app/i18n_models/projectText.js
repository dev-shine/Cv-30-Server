'use strict';
module.exports = (Sequelize, DataTypes) => {
	var ProjectText = Sequelize.define('projectText', {
		projectId: {
			allowNull: false,
			primaryKey: true,
			type: DataTypes.UUID,
			validate: {
                isUUID: 4
            },
			field: 'project_id'
		},
		languageId: {
			primaryKey: true,
			allowNull: false,
			defaultValue: 1,
			type: DataTypes.INTEGER,
            field: 'language_id'
		},
		description: {
			type: DataTypes.TEXT,
			allowNull: true
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
	}, {
		timestamps: true,
		updatedAt: 'updated_at',
		createdAt: 'created_at',
		indexes: [
			{ fields: ['project_id'] },
			{ fields: ['language_id'] }
		],
		freezeTableName: true,
		tableName: 'project_i18n'
	});
	ProjectText.associate = function(models) {
		ProjectText.belongsTo(models.project, { as: 'project' });
		ProjectText.belongsTo(models.language, { as: 'language' });
	};
	return ProjectText;
};