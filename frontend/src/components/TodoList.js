// import module with object literal {}
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Todolist = () => {
  // destructuring array | initial value = empty array
  const [lists, setList] = useState([]);

  // use effect componentDidMount | initial value = empty array
  useEffect(() => {
    getList();
  }, []); // empty array in useEffect for stop looping run function getList

  // asynchronous arrow function expression get-allData
  const getList = async () => {
    const response = await axios.get("http://localhost:5000/todoApps");
    setList(response.data);
  };

  // asynchronous arrow function expression delete-dataById
  const deleteList = async (id) => {
    await axios.delete(`http://localhost:5000/todoApps/${id}/delete`);
    getList();
  };

  return (
    <div id="listComponent" className="component-home flex flex-col">
      {lists.map((list) => (
        <div
          key={list.id}
          className={
            list.status === "active" ? "card-note" : "card-note line-through"
          }
        >
          <span className="text-note">{list.text}</span>
          <div className="button m-1 basis-1/5 flex justify-center">
            <Link
              to={`/${list.id}/edit`}
              id="editBtn"
              className=" w-7 h-7 m-1 mr-[0.5px] py-0 px-1 bg-slate-800 rounded-md cursor-pointer hover:bg-slate-900 hover:scale-105 group"
            >
              <span className="m-auto text-sm group-hover:scale-105">✏️</span>
            </Link>
            <button
              onClick={() => deleteList(list.id)}
              className="w-7 h-7 m-1 ml-[0.5px] p-0 bg-slate-800 rounded-md cursor-pointer hover:bg-slate-900 hover:scale-105 group"
            >
              <span className="m-auto text-sm group-hover:scale-105">❌</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Todolist;
