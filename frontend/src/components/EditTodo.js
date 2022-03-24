// import module with object literal {}
import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom"; // useNavigate(react-router-dom v6) = useHistory

const Edittodo = () => {
  // destructuring array | initial value = empty array
  const [text, setText] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  // use effect componentDidMount | initial value = empty array
  const updateList = async (event) => {
    event.preventDefault(); // avoid page reload
    // store-data
    await axios.patch(`http://localhost:5000/todoApps/${id}/update`, {
      text: text,
    });
    // to use navigate -> navigate(path);
    navigate("/");
  };

  return (
    <div>
      <div id="editComponentForm" className="components-home">
        <form
          className="flex flex-row justify-center my-2"
          onSubmit={updateList}
        >
          <input
            type="text"
            id="text"
            placeholder="Ubah catatan"
            className="w-3/4 bg-transparent border-2 border-[#ff5411] rounded-l-md my-0 mx-0 py-2 px-3 outline-none font-inter text-sm text-slate-50 box-border overflow-hidden placeholder:text-slate-400 placeholder:font-inter"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <button className="w-[100px] bg-primary border-none rounded-r-md my-0 mx-0 py-2 px-1 box-border overflow-hidden font-inter text-sm font-bold text-slate-50">
            Ubah
          </button>
        </form>
      </div>
      <div
        id="editComponentText"
        className="component-home flex flex-col cursor-default"
      >
        <h3 className="text-slate-50 font-inter text-sm font-light">
          Update List :
        </h3>
        <div className="card-edit">
          <span className="text-edit">{text}</span>
        </div>
      </div>
    </div>
  );
};

export default Edittodo;
