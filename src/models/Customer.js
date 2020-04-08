
module.exports = (sequelize, DataTypes) => {
  var Customer = sequelize.define('Customer', {
    name: {
      type: DataTypes.STRING,
      unique: true
    },
    address: DataTypes.STRING(1234),
    pin: DataTypes.STRING,
    state: DataTypes.STRING,
    gstin: DataTypes.STRING,
    balance: DataTypes.REAL
  })

  Customer.associate = function (models) {
    models.Customer.belongsTo(models.Company)
  }

  return Customer
}
