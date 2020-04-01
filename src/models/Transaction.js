module.exports = (sequelize, DataTypes) => {
  // TODO: Track balance history for each transaction
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
