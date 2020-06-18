/* Product Table Model */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('product', {
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    product_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    seller_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pic_address: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    upload_time: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'product'
  });
};
