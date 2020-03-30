module.exports = (sequelize, DataTypes) => {
  var Company = sequelize.define('Company', {
    name: {
      type: DataTypes.STRING,
      unique: true
    },
    address: {
      type: DataTypes.STRING(1234)
    },
    pin: DataTypes.STRING,
    state: DataTypes.STRING,
    pan: {
      type: DataTypes.STRING,
      unique: true
    },
    gstin: {
      type: DataTypes.STRING,
      unique: true
    },
    date_of_formation: {
      type: DataTypes.DATE
    },
    registration_number: DataTypes.STRING
  })

  Company.associate = function (models) {
    Company.hasMany(models.Partner)
    Company.hasMany(models.Capital)
  }

  return Company
}
