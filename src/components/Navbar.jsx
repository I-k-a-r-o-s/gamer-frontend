import {
  TbLayoutSidebarLeftExpand,
  TbLayoutSidebarRightExpand,
} from "react-icons/tb";
import ThemeSelector from "./ThemeSelector";
import { useState, useContext } from "react";
import { Link} from "react-router";
import { AuthContext } from "../context/AuthContext";
import { FaRegUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const { user, logout,location } = useContext(AuthContext);
  return (
    <nav className="navbar w-full bg-base-300">
      <div className="navbar-start">
        <label
          htmlFor="my-drawer-4"
          aria-label="open sidebar"
          className="btn btn-square btn-ghost"
          onClick={() => setToggle(!toggle)}
        >
          {/* Sidebar toggle icon */}
          {toggle ? (
            <TbLayoutSidebarRightExpand size={20} />
          ) : (
            <TbLayoutSidebarLeftExpand size={20} />
          )}
        </label>
        <div className="px-4 hover:cursor-pointer">
          <Link to="/" className="btn btn-ghost">
            Gamer
          </Link>
        </div>
      </div>
      <div className="navbar-end">
        <ThemeSelector />
        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="rounded-full">
                <FaRegUserCircle size={20} />
              </div>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a onClick={logout}>Logout</a>
              </li>
            </ul>
            <span className="px-4 text-sm font-semibold">{user.name}</span>
          </div>
        ) : (
          location.pathname !== "/login" && (
            <Link to="/login" className="btn btn-ghost">
              Login
            </Link>
          )
        )}
      </div>
    </nav>
  );
};
export default Navbar;
