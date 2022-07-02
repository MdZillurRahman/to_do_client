import React from 'react';
import { Link } from "react-router-dom";
import icon from "../images/icon.png";

const Navbar = () => {

    const navbar = <>
        <li><Link to="/calender">Calender</Link></li>
        <li><Link to="/todo">To-Do</Link></li>
        <li><Link to="/completedTask">Completed Task</Link></li>
        <li><Link to="/about">About</Link></li>

    </>

    return (
        <div className="navbar bg-blue-400 text-white text-xl">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex="0" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex="1" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-600 rounded-box w-52">
      {navbar}
      </ul>
    </div>
    <Link className="btn btn-ghost normal-case text-xl" to='/home'><img src={icon} className="w-8 mr-3" alt="" /> What To Do</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      {navbar}
    </ul>
  </div>
</div>
    );
};

export default Navbar;