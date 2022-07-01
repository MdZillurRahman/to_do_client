import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { MdDeleteOutline } from "react-icons/md";
import { ImAttachment } from "react-icons/im";
import { FaFileSignature } from "react-icons/fa";
import { BsCalendar2Date } from "react-icons/bs";
import { TbSubtask } from "react-icons/tb";

const EditTask = ({ task, tasks, setTasks }) => {
  const { getValues, register, reset } = useForm();
    const [reload, setReload] = useState(true);

  const submitForm = (event) => {
    event.preventDefault();
    const taskName = getValues("taskName");
    const details = getValues("details");

const updateTask = {
    task: taskName,
    details: details
}

fetch(`http://localhost:5000/task/${task._id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateTask),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
        
      setReload(!reload);

  };

  const handleDelete = (id) => {
    const url = `http://localhost:5000/task/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        const remaining = tasks.filter((task) => task._id !== id);
        setTasks(remaining);
      });
      
      setReload(!reload);
  };

  return (
    <div>
      <input type="checkbox" id="editTask" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box h-[450px]">
          <form className=" mt-6" onSubmit={submitForm}>
            <label className=" text-gray-400">Task Name*</label>
            <input id="taskName"
              className="border w-full rounded-lg mb-4 h-6"
              type="text" name="taskName"
              placeholder={task.task}
              {...register("taskName")}
            />
        
            <textarea id="details"
              class="textarea textarea-bordered mb-4 w-full"
              type="text"
              name="details"
              placeholder="Add Details"
              {...register("details")}
            ></textarea>{" "}
            <br />
            <p className="flex items-center gap-4 cursor-pointer mb-4">
              <ImAttachment /> Attach File
            </p>
            <p className="flex items-center gap-4 cursor-pointer mb-4">
              <FaFileSignature /> Add Signature
            </p>
            <p className="flex items-center gap-4 cursor-pointer mb-4">
              <BsCalendar2Date /> Add Date
            </p>
            <p className="flex items-center gap-4 cursor-pointer mb-4">
              <TbSubtask /> Add Subtask
            </p>
            <label onClick={() => {
              reset({taskName: `${task.task}`, details: "" });
              setReload(!reload);
            } }
              for="editTask"
              class="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <label
              for="editTask" onClick={() => handleDelete(task._id)} 
              class="absolute top-3 left-3"
            >
              <MdDeleteOutline className="hover:text-red-500 text-2xl" />
            </label>
            
            <input
              className="absolute right-4 my-4 text-white border bg-blue-400 px-5 py-1 rounded-xl uppercase"
              type="submit"
              value="Confirm"
              id="submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditTask;
