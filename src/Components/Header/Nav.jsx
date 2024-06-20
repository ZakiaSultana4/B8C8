import { NavLink } from "react-router-dom"

import logo from "../../assets/logo.webp";

const Nav = () => {

  return (
    <div className="navbar bg-base-100 flex justify-between shadow-sm  font-semibold 
    max-w-screen-xl mx-auto  py-2">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

        <li className=" flex justify-center items-center mb-5">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-[#143063]  py-1 px-3 rounded-md  border-2  border-[#143063]"
                : " text-[#143063] py-1 px-3 rounded-md border-2"
            }
          >
            Home
          </NavLink>
        </li>
        <li className=" flex justify-center items-center mb-5">
          <NavLink
            to="/favourite"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-[#143063]  py-1 px-3 rounded-md  border-2  border-[#143063]"
                : " text-[#143063] py-1 px-3 rounded-md border-2 "
            }
          >
            Favourite
          </NavLink>
        </li>

  

        </ul>
      </div>
      <img src={logo} alt="" className="bg-[#143063] px-3 py-2 w-28" />
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
      <ul className="flex justify-center items-center gap-x-8 py-2 px-4 rounded-md ">
        <li className=" flex justify-center items-center">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-[#143063]  py-1 px-3 rounded-md  border-2  border-[#143063]"
                : " text-[#143063] py-1 px-3 rounded-md border-2"
            }
          >
            Home
          </NavLink>
        </li>
        <li className=" flex justify-center items-center">
          <NavLink
            to="/favourite"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-[#143063]  py-1 px-3 rounded-md  border-2  border-[#143063]"
                : " text-[#143063] py-1 px-3 rounded-md border-2 "
            }
          >
            Favourite
          </NavLink>
        </li>

       
      </ul>
      </ul>
    </div>
    <div className="navbar-end">
    <li className=" flex justify-center items-center">
          <NavLink
            to="/login"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-[#143063]  py-1 px-3 rounded-md  border-2  border-[#143063]"
                : " text-[#143063] py-1 px-3 rounded-md border-2 "
            }
          >
            Login
          </NavLink>
        </li>
    </div>
  </div>
  )
}

export default Nav