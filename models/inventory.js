module.exports = function (sequelize, Sequelize) {
  const Inventory = sequelize.define('inventory', {
    Name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    type: {
      type: Sequelize.STRING
    },
    size: {
      type: Sequelize.STRING
    },
    images: {
      type: Sequelize.TEXT
    }
  });

  return Inventory;
}