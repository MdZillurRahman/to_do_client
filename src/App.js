import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Calender from "./Components/Calender";
import ToDoList from "./Components/ToDoList";
import CompletedTask from "./Components/CompletedTask";
import { useState } from "react";
import Footer from "./Components/Footer";

function App() {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/calender" element={<Calender date={date} setDate={setDate}></Calender>}></Route>
        <Route path="/todo" element={<ToDoList date={date}></ToDoList>}></Route>
        <Route path="/completedTask" element={<CompletedTask date={date}></CompletedTask>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
