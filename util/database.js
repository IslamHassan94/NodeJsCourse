const { Sequelize } = require("sequelize");

// Sequlize(Databas name, username, password, {mysql/postgress/oracle..., host})
const sequelize = new Sequelize("node-complete", "root", "MySqL4S//..", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
