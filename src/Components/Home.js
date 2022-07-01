import React, { useState } from "react";
import Calender from "./Calender";
import ToDoList from "./ToDoList";

const Home = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <div className="grid grid-col-1 lg:grid-cols-2 mx-4 lg:mx-56 ">
        <ToDoList date={date}></ToDoList>
        <Calender date={date} setDate={setDate}></Calender>
      </div>
    </div>
  );
};

export default Home;
