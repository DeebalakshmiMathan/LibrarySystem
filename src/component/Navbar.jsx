import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="h-full w-full bg-black flex items-center justify-between text-white px-10">
      <div className=" text-2xl">Library Management System</div>
      <div className="flex items-center justify-center text-xl">
        <li className=" list-none mr-5">
          <Link to = "/">Book</Link>
        </li>
        <li className=" list-none">
          <Link to="/member">Member</Link>
        </li>
      </div>
    </div>
  );
};

export default Navbar;
