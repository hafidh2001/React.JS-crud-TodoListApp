// import library
import React from "react";

// import components
import TodoList from "../components/TodoList";
import AddTodo from "../components/AddTodo";

export default function HomePage() {
  return (
    <div
      id="content"
      className="bg-[#1f1f1f] my-10 mx-auto w-[90%] min-h-[500px] py-8 px-5  box-border overflow-hidden border-none rounded-lg max-w-md lg:min-h-[650px]"
    >
      <h1 className="text-slate-50 text-center mt-0 mb-10 mx-0 font-bold text-2xl cursor-default">
        My-Todo List
      </h1>
      <AddTodo />
      <TodoList />
    </div>
  );
}
