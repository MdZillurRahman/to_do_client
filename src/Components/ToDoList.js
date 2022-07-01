import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import { MdOutlineEdit } from "react-icons/md";
import EditTask from "../EditTask";
import edit from "../images/edit.png";

const ToDoList = ({ date }) => {
  const [tasks, setTasks] = useState([]);
  const [field, setField] = useState(false);
  const [modal, setModal] = useState(false);
  const formattedDate = format(date, "PP");

  console.log(modal);

  useEffect(() => {
    async function Data() {
      const fetchData = await fetch(
        `http://localhost:5000/task?date=${formattedDate}`
      );
      const res = await fetchData.json();
      setTasks(res);
    }
    Data();
  }, [formattedDate]);

  const handleKeyDown = (event) => {
    const task = event.target.value;
    const taskAdd = {
      date: formattedDate,
      task: task,
    };

    if (event.key === "Enter") {
      fetch("http://localhost:5000/task", {
        method: "Patch",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(taskAdd),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    }
  };

  return (
    <>
      <p>Selected Date: {formattedDate}</p>
      <div>
        <p>To DO</p>
        {tasks.map((task) => (
          <>
            <div className="flex items-center group">
              <input type="radio" name="" id="" /> {task.task}
              <label className="cursor-pointer" htmlFor="editTask" onClick={() => setModal(true)}><img className="invisible group-hover:visible w-4 " src={edit} alt="" /></label>
            </div>
          </>
        ))}
        <button onClick={() => setField(true)}>
          <p className="hover:text-blue-500">
            <span
              id="plus"
              className="hover:bg-blue-500 hover:rounded-full hover:text-white font-bold"
            >
              +
            </span>{" "}
            Add a task
          </p>
        </button>

        {field && (
          <input
            onKeyDown={handleKeyDown}
            className="border-2 absolute top-100 left-0"
            type="text"
            name="task"
            id=""
          />
        )}
      </div>
      {modal && <EditTask></EditTask>}
    </>
  );
};

export default ToDoList;
