import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import EditTask from "../EditTask";
import edit from "../images/edit.png";
import useTask from "../Hooks/useTask";
import { FcCheckmark } from "react-icons/fc";

import { FiPlus } from "react-icons/fi";

const ToDoList = ({ date }) => {
  const [tasks, setTasks] = useTask(date);
  const [task, setTask] = useState({});
  const [field, setField] = useState(false);
  const [modal, setModal] = useState(false);
  const formattedDate = format(date, "PP");
  

  const handleKeyDown = (event) => {
    event.preventDefault();
    let task = event.target.value;
    const taskAdd = {
      date: formattedDate,
      task: task,
    };

    const postFunc = () => {
      fetch("https://friendly-bunnyhug-96716.herokuapp.com/task", {
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
      task.value = "";
    };

    if (event.key === "Enter") {
      postFunc();
    }
  };

  const handleComplete = (id) => {
    const url = `https://friendly-bunnyhug-96716.herokuapp.com/task/${id}`;

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
    <div className="my-8">
      <div className="border-2 w-80 rounded">
        <p className="my-4 mx-2 text-xl">To Do Task</p>
        <button onClick={() => setField(true)}>
          <p className="group mx-2 flex items-center">
            <FiPlus className="group-hover:bg-blue-300 group-hover:rounded-full group-hover:text-white font-bold" />

            <span className="group-hover:text-blue-300 mx-2">Add a task</span>
          </p>
        </button>

        {field && (
          <>
            <input
              onKeyUp={handleKeyDown}
              className="border border-gray-500 rounded absolute top-100 left-4 lg:left-[226px] w-80"
              type="text"
              name="task"
              placeholder="New task"
            />
          </>
        )}
        {tasks.map((task) => (
          <>
            <div className=" group ml-2 my-2">
              {task.role !== "completed" ? (
                <div className="flex items-center justify-between">
                  <div>
                    <input
                      onClick={() => handleComplete(task._id)}
                      type="radio"
                    />{" "}
                    {task.task}
                  </div>
                  <label
                    className="cursor-pointer"
                    htmlFor="editTask"
                    onClick={() => {
                      setModal(true);
                      setTask(task);
                    }}
                  >
                    <img
                      className="invisible group-hover:visible w-4"
                      src={edit}
                      alt=""
                    />
                  </label>
                </div>
              ) : (
                ""
              )}
            </div>
          </>
        ))}
      </div>
      {modal && (
        <EditTask task={task} tasks={tasks} setTasks={setTasks}></EditTask>
      )}
    </div>
  );
};

export default ToDoList;
