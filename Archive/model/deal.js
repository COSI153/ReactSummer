/* Table deal */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('deal', {
    deal_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    tproduct_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    buyer_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    seller_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    time: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'deal'
  });
};
