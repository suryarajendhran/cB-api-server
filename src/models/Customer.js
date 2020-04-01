
module.exports = (sequelize, DataTypes) => {
  var Customer = sequelize.define('Customer', {
    name: DataTypes.STRING,
    address: DataTypes.STRING(1234),
    pin: DataTypes.STRING,
    state: DataTypes.STRING,
    gstin: DataTypes.STRING
  })

  Customer.associate = function (models) {
    models.Customer.belongsTo(models.Company)
  }

  return Customer
}
