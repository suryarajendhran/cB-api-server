
module.exports = (sequelize, DataTypes) => {
  var Commodity = sequelize.define('Commodity', {
    commodity_code: DataTypes.INTEGER,
    name: DataTypes.STRING,
    tax_rate: DataTypes.REAL
  })

  return Commodity
}
