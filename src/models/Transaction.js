module.exports = (sequelize, DataTypes) => {
  var Transaction = sequelize.define('Transaction', {
    description: DataTypes.STRING,
    type: DataTypes.STRING,
    amount: DataTypes.REAL
  })

  Transaction.associate = function (models) {
    models.Transaction.belongsTo(models.TransactionAccount)
    models.Transaction.belongsTo(models.Company)
  }

  return Transaction
}
