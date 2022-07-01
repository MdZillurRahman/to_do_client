import React, { useEffect, useState } from "react";
import { FcCheckmark } from "react-icons/fc";
import useTask from "../Hooks/useTask";
import { format } from "date-fns";
import Calendar from "react-calendar";
import "react-day-picker/dist/style.css";

const CompletedTask = ({ date}) => {
  const [tasks] = useTask(date);
  const formattedDate = format(date, "PP");

  return (
    <div>
      <p className="text-center text-xl font-bold my-4">
        Completed Task on {formattedDate}
      </p>
      <div>
          {tasks.map((task) => (
            <>
              <ul>
                {task.role === "completed" ? (
                  <div className="flex items-center text-lg mx-12">
                    <FcCheckmark />{" "}
                    <li className="line-through ml-4">{task.task}</li>
                  </div>
                ) : (
                  ""
                )}
              </ul>
            </>
          ))}
      </div>
    </div>
  );
};

export default CompletedTask;
