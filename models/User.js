module.exports = (sequelize, Sequelize) => {
   const User = sequelize.define('user', {
      userName: {
         type: Sequelize.STRING,
         allowNull: false
      },
      password: {
         type: Sequelize.TEXT,
         allowNull: false
      },
      admin: {
         type: Sequelize.BOOLEAN,
         defaultValue: 0
      },
      displayName: {
         type: Sequelize.STRING
      }
   });

   return User;
}