import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import { FcCheckmark } from "react-icons/fc";

const CompletedTask = ({ date }) => {
  const [completeTask, setCompleteTask] = useState([]);
  const formattedDate = format(date, "PP");

  useEffect(() => {
    async function Data() {
      const fetchData = await fetch(
        `http://localhost:5000/task?date=${formattedDate}`
      );
      const res = await fetchData.json();
      setCompleteTask(res);
    }
    Data();
  }, [formattedDate]);

  return (
    <div>
      <p>Completed Task</p>
      {completeTask.map((task) => (
        <>
          <div className="flex items-center group">
            {task.role === "completed" ? (
              <>
                <FcCheckmark /> <p className="line-through ml-4">{task.task}</p>
              </>
            ) : (
              ""
            )}
          </div>
        </>
      ))}
    </div>
  );
};

export default CompletedTask;
