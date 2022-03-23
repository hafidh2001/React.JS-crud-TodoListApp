import { Sequelize } from "sequelize";

const db = new Sequelize("todoList_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
