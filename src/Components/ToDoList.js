import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';

const ToDoList = ({date}) => {
const [tasks, setTasks] = useState([]);
const formattedDate = format(date, 'PP');   

useEffect(() => {
    async function Data() {
      const fetchData = await fetch(`http://localhost:5000/task?data=${date}`);
      const res = await fetchData.json();
      console.log(res);
      setTasks(res);
    }
    Data();
  }, [date]);

    return (
        <>
        <p>Selected Date: {formattedDate}</p>
        <div>
            <p>To DO</p>
            {
                tasks.map(task =>
                    <>
                    
                    <p><input type="radio" name="" id="" /> {task.task}</p>
                    </>
                    )
            }
            <p>+ Add a task</p>
        </div>
        </>
    );
};

export default ToDoList;