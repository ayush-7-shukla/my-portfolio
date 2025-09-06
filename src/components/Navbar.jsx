import React from "react";
import DarkModeToggle from "./DarkModeToggle";


<div className="flex space-x-6 font-medium items-center">
  <ul className="flex space-x-6">
    <li><a href="#home" className="hover:text-blue-600">Home</a></li>
    <li><a href="#about" className="hover:text-blue-600">About</a></li>
    <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
    <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
  </ul>
  <DarkModeToggle />
</div>


function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">Ayush Shukla</h1>
        <ul className="flex space-x-6 font-medium">
          <li><a href="#home" className="hover:text-blue-600">Home</a></li>
          <li><a href="#about" className="hover:text-blue-600">About</a></li>
          <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
