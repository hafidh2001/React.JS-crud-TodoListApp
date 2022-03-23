// import models
import Todo from "../models/todoModel.js";

// asynchronous arrow function expression || parameter : request, respon
const getAllTodo = async (req, res) => {
  try {
    const todos = await Todo.findAll();
    res.json(todos);
  } catch (error) {
    res.json({ message: error.message });
  }
};

const storeTodo = async (req, res) => {
  try {
    await Todo.create(req.body);
    res.json({
      message: "List has been stored",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

const getTodoById = async (req, res) => {
  try {
    const todo = await Todo.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(todo[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

const updateTodo = async (req, res) => {
  try {
    await Todo.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Lists has been updated",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

const deleteTodo = async (req, res) => {
  try {
    await Todo.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "List has been deleted",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

// export function with object literal {}
export { getAllTodo, storeTodo, getTodoById, updateTodo, deleteTodo };
