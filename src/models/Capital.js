module.exports = (sequelize, DataTypes) => {
  var Capital = sequelize.define('Capital', {
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  })

  Capital.associate = function (models) {
    Capital.belongsTo(models.Partner)
    Capital.belongsTo(models.Company)
  }

  return Capital
}
