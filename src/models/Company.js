module.exports = (sequelize, DataTypes) =>
  sequelize.define('Company', {
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
    date_of_formation: DataTypes.DATEONLY,
    registration_number: DataTypes.STRING
  })
