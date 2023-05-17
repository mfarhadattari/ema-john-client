import { Link } from "react-router-dom";
import NavigationLink from "./NavigationLink";
import logo from "../../assets/Logo.svg";
import Avatar from "../Avatar/Avatar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const NavigationBar = () => {
  const { user } = useContext(AuthContext);

  const navItems = (
    <>
      <NavigationLink to="/">Home</NavigationLink>
      <NavigationLink to="/orders-review">Orders Review</NavigationLink>

      {user ? (
        <Avatar></Avatar>
      ) : (
        <NavigationLink to="/login">Login</NavigationLink>
      )}
    </>
  );
  return (
    <nav className="p-5 lg:px-20  bg-slate-950 text-white navbar sticky top-0 z-50 w-full">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-slate-900"
          >
            {navItems}
          </ul>
        </div>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>

      <div className="navbar-end gap-10">
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1  gap-5">{navItems}</ul>
        </div>
        <Link to="admin" className="btn btn-outline text-red-500 font-bold">
          Admin
        </Link>
      </div>
    </nav>
  );
};

export default NavigationBar;
