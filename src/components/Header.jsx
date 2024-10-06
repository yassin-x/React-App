import { React, useState } from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="p-4 text-white rounded-b-lg second-background">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-12 h-12 mr-3 rounded-full" />
          <h1 className="text-xl font-bold">My Website</h1>
        </div>

        <div className="lg:hidden">
          <button
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        <nav className={`lg:flex ${isOpen ? "block mt-4" : "hidden"} lg:block`}>
          <ul
            className={`flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6`}
          >
            <li>
              <NavLink
                to="/"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => (isActive ? "text-green-500" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/documents"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => (isActive ? "text-green-500" : "")}
              >
                Documents
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/support"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => (isActive ? "text-green-500" : "")}
              >
                Support
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/login"}
                onClick={() => setIsOpen(false)}
                className={`bg-green-900 p-2 hover:bg-green-700 rounded-md transition-all duration-300`}
              >
                Login
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
