'use strict';
module.exports = (Sequelize, DataTypes) => {
	var Hobby = Sequelize.define('hobby', {
		id: {
			allowNull: false,
			primaryKey: true,
			type: DataTypes.UUID,
			validate: {
				isUUID: 4
			},
		},
		userId: {
			allowNull: false,
			type: DataTypes.UUID,
			validate: {
				isUUID: 4
			},
			field: 'user_id'
		},
		title: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		description: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		location: {
			allowNull: true,
			type: DataTypes.STRING(255),
			field: 'location'
		},
		isCurrent: {
			allowNull: true,
			defaultValue: false,
			type: DataTypes.BOOLEAN,
			field: 'is_current'
		},
		position: {
			type: DataTypes.STRING(100),
			allowNull: false
		},
		company: {
			type: DataTypes.STRING(100),
			allowNull: false
		},
		startDate: {
			allowNull: false,
			type: DataTypes.DATE,
			field: 'start_date'
		},
		endDate: {
			allowNull: true,
			type: DataTypes.DATE,
			field: 'end_date'
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
				{ fields: ['user_id'] },
				// { fields: ['location_id'] },
				// { fields: ['user_id', 'location_id'] }
			],
			freezeTableName: true,
			tableName: 'hobby'
		});
        Hobby.associate = models => {
            Hobby.belongsTo(models.user, { as: 'owner', foreignKey: 'user_id' });
		// Experience.hasMany(models.experienceText, { as: 'i18n', foreignKey: 'experience_id' });
		// Experience.belongsTo(models.location, { as: 'location' });
		Hobby.hasMany(models.video, { as: 'videos', foreignKey: 'source_id' });
		Hobby.hasMany(models.image, { as: 'images', foreignKey: 'source_id' });
	};
	return Hobby;
};