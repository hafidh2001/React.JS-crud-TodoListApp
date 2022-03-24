// import module with object literal {}
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom"; // useNavigate(react-router-dom v6) = useHistory

const Showtodo = () => {
  // destructuring array | initial value = empty array
  const [list, setList] = useState("");
  const [text, setText] = useState("");
  const { id } = useParams();

  // use effect componentDidMount | initial value = empty array
  useEffect(() => {
    // asynchronous arrow function expression get-dataById
    const getListById = async () => {
      const response = await axios.get(`http://localhost:5000/todoApps/${id}`);
      setList(response.data.id);
      setText(response.data.text);
    };

    getListById();
  }, [id]); // id in useEffect for stop looping run function getListById

  return (
    <div
      id="showComponent"
      className="component-home flex flex-col cursor-default"
    >
      <h3 className="text-slate-50 font-inter text-sm font-light">List :</h3>
      <div key={list} className="card-note">
        <span className="text-edit">{text}</span>
      </div>
    </div>
  );
};

export default Showtodo;
