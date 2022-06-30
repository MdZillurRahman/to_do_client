import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {

    const navbar = <>
        <li><a>Calender</a></li>
        <li><a>To-Do</a></li>
        <li><a>Completed Task</a></li>
    </>

    return (
        <div class="navbar bg-base-100">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabIndex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      {navbar}
      </ul>
    </div>
    <Link class="btn btn-ghost normal-case text-xl" to='/home'>What To Do</Link>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal p-0">
      {navbar}
    </ul>
  </div>
</div>
    );
};

export default Navbar;