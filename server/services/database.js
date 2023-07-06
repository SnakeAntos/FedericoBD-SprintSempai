const Sequelize = require("sequelize");
require("dotenv").config();

const port = process.env.DATABASE_PORT;
const pass = process.env.PGPASSWORD;
const user = process.env.PGUSER;
const database = process.env.PGDATABASE;
console.log(user, pass, database, port);

const sequelize = new Sequelize(database, user, pass, {
  host: "localhost",
  dialect: "postgres",
  port: port,
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Conexión exitosa a la base de datos.");
  })
  .catch((error) => {
    console.error("Error al conectar a la base de datos:", error);
  });

module.exports = sequelize;

