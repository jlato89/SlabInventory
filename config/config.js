module.exports = {
  local: {
    username: 'User',
    password: 'password',
    database: 'myDatabase',
    host: 'localhost',
    dialect: 'mysql',
    logging: false
  },
  development: {
    username: process.env.DB_USERNAME_SLABINVENTORY,
    password: process.env.DB_PASSWORD_SLABINVENTORY,
    database: process.env.DB_DATABASE_SLABINVENTORY,
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false
  }
};