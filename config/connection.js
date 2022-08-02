// import the sequilize constructor from library
const Sequilize = require("sequelize");

require("dotenv").config();

//create connection to your database, pass in your mysql information for username and password

const sequelize = new Sequilize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: "localhost",
    dialect: "mysql",
    port: 3306,
  }
);

module.exports = sequelize;
