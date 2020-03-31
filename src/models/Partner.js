
module.exports = (sequelize, DataTypes) => {
  var Partner = sequelize.define('Partner', {
    name: {
      type: DataTypes.STRING,
      unique: true
    },
    father_name: {
      type: DataTypes.STRING
    },
    pan: {
      type: DataTypes.STRING,
      unique: true
    },
    aadhar: {
      type: DataTypes.STRING,
      unique: true
    },
    opening_balance: DataTypes.REAL,
    date_of_birth: {
      type: DataTypes.DATE
    },
    address: {
      type: DataTypes.STRING(1234)
    },
    profit_ratio: {
      type: DataTypes.FLOAT
    },
    date_of_admission: {
      type: DataTypes.DATE
    },
    date_of_retirement: {
      type: DataTypes.DATE
    }
  })

  Partner.associate = function (models) {
    models.Partner.belongsTo(models.Company)
  }

  return Partner
}
