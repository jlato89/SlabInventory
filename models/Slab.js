module.exports = (sequelize, Sequelize) => {
  const Slab = sequelize.define('slab', {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    type: {
      type: Sequelize.STRING,
      allowNull: false
    },
    finish: {
      type: Sequelize.STRING
    },
    size: {
      type: Sequelize.STRING
    },
    imgFileNames: {
      type: Sequelize.TEXT
    }
  });

  return Slab;
}