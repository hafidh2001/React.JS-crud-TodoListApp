// import module with object literal {}
import { useState } from "react";
import axios from "axios";

const AddTodo = () => {
  // destructuring array | initial value = empty string
  const [text, setText] = useState("");

  // asynchronous arrow function expression store-data
  const storeList = async (e) => {
    if (!text) {
      e.preventDefault(); // avoid page reload
      return;
    }

    await axios.post("http://localhost:5000/todoApps", {
      text: text,
      status: "active",
    });
    setText("");
  };

  return (
    <div className="components-home">
      <form className="flex flex-row justify-center my-2" onSubmit={storeList}>
        <input
          type="text"
          id="text"
          placeholder="Tambahkan daftar"
          className="w-3/4 bg-transparent border-2 border-[#ff5411] rounded-l-md my-0 mx-0 py-2 px-3 outline-none font-inter text-sm text-slate-50 box-border overflow-hidden placeholder:text-slate-400 placeholder:font-inter"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button className="w-[100px] bg-primary border-none rounded-r-md my-0 mx-0 py-2 px-1 box-border overflow-hidden font-inter text-sm font-bold text-slate-50">
          Tambah
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
