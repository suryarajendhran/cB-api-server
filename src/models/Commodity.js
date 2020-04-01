
module.exports = (sequelize, DataTypes) => {
  var Commodity = sequelize.define('Commodity', {
    commodity_code: DataTypes.INTEGER,
    name: DataTypes.STRING,
    tax_rate: DataTypes.REAL
  })

  Commodity.associate = function (models) {
    models.Commodity.hasMany(models.Sale)
  }

  return Commodity
}
