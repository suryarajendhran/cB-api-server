
module.exports = (sequelize, DataTypes) => {
  var Sale = sequelize.define('Sale', {
    description: DataTypes.STRING,
    bill_no: DataTypes.STRING,
    date_of_sale: DataTypes.DATE,
    nature_of_sale: DataTypes.STRING, // Inside state or outside state
    quantity: DataTypes.REAL,
    price: DataTypes.REAL
  })

  Sale.associate = function (models) {
    models.Sale.belongsTo(models.Company)
    models.Sale.belongsTo(models.Customer)
    models.Sale.belongsTo(models.Transaction)
    models.Sale.belongsTo(models.Commodity)
  }
  return Sale
}
