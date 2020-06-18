/* Comment Table Model */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('comment', {
    comment_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    cproduct_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cuser_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    time: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'comment'
  });
};
