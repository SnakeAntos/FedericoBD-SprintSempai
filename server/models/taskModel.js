const Sequelize = require("sequelize");
const sequelize = require("../services/database");

const task = sequelize.define(
  "task",
  {
    id_task: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    priority_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    user_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },

    completed: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    tableName: "task", // Especifica el nombre de la tabla aquí
    freezeTableName: true, // Evita la pluralización automática del nombre de la tabla
  }
);

module.exports = task;
