import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import EditTask from "../EditTask";
import edit from "../images/edit.png";
import CompletedTask from "./CompletedTask";

const ToDoList = ({ date }) => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({});
  const [field, setField] = useState(false);
  const [modal, setModal] = useState(false);
  const [reload, setReload] = useState(true);
  const formattedDate = format(date, "PP");



  useEffect(() => {
    async function Data() {
      const fetchData = await fetch(
        `http://localhost:5000/task?date=${formattedDate}`
      );
      const res = await fetchData.json();
      setTasks(res);
      setReload(!reload);
      
    }
    Data();
  }, [formattedDate,reload]);

  const handleKeyDown = (event) => {
    event.preventDefault();
    let task = event.target.value;
    const taskAdd = {
      date: formattedDate,
      task: task,
    };

    if (event.key === "Enter") {
      fetch("http://localhost:5000/task", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(taskAdd),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });

        const task = document.getElementById("task");
        task.value="";
    }

    

  };

  const handleComplete = (id) => {
    const url = `http://localhost:5000/task/${id}`;

    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const remaining = tasks.filter((task) => task._id !== id);
        setTasks(remaining);
      });
  };

  return (
    <>
      
      <div className="border w-80">
        <p>To Do</p>
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
            className="absolute top-100 left-0 w-80"
            type="text"
            name="task"
            id="task"
          />
        )}
        {tasks.map((task) => (
          <>
            <div className="flex items-center group">
              {
               task.role !== "completed" ? <><input
               onClick={() => handleComplete(task._id)}
               type="radio"
               
             />{" "}
             {task.task}
             <label
               className="cursor-pointer"
               htmlFor="editTask"
               onClick={() => {
                   setModal(true);
                   setTask(task);
               }}
             >
               <img
                 className="invisible group-hover:visible w-4 "
                 src={edit}
                 alt=""
               />
             </label></> : ""
                    
                }
            </div>
          </>
        ))}
        

        
      </div>
      {modal && <EditTask task ={task} tasks ={tasks} setTasks={setTasks}></EditTask>}
    </>
  );
};

export default ToDoList;
