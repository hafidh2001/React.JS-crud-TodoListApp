import express from "express"; // import library

// import controllers with object literal {}
import {
  getAllTodo,
  storeTodo,
  getTodoById,
  updateTodo,
  deleteTodo,
} from "../controllers/TodoController.js";

const router = express.Router();

router.get("/", getAllTodo);
router.post("/", storeTodo);
router.get("/:id", getTodoById);
router.patch("/:id/update", updateTodo);
router.delete("/:id/delete", deleteTodo);

export default router;
