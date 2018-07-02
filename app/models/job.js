'use strict';
module.exports = (sequelize, DataTypes) => {
	var Job = sequelize.define('job', {
		id: {
			primaryKey: true,
			type: DataTypes.UUID,
			allowNull: false,
			validate: {
				isUUID: 4
			},
			field: 'id'
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
		createdAt: 'created_at'
	});
	Job.associate = function(models) {
		Job.hasMany(models.jobText, { as: 'i18n', foreignKey: 'job_id' });
	};
	return Job;
};