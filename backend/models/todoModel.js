import { Sequelize } from "sequelize"; // import library
import db from "../config/database.js"; // import database

// destructuring object
const { DataTypes } = Sequelize;

const Todo = db.define(
  "lists",
  {
    text: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

export default Todo;
