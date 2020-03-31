module.exports = (sequelize, DataTypes) => {
  var TransactionAccount = sequelize.define('TransactionAccount', {
    description: DataTypes.STRING,
    type: DataTypes.STRING, // Cash or Bank
    bank_name: DataTypes.STRING,
    account_number: {
      type: DataTypes.STRING,
      unique: true
    },
    ifsc_code: DataTypes.STRING,
    balance: DataTypes.REAL
  })

  TransactionAccount.associate = function (models) {
    models.TransactionAccount.belongsTo(models.Company)
  }

  return TransactionAccount
}
