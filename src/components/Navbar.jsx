import {
  TbLayoutSidebarLeftExpand,
  TbLayoutSidebarRightExpand,
} from "react-icons/tb";
import ThemeSelector from "./ThemeSelector";
import { useState } from "react";
import { Link } from "react-router";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
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
        <Link to="/login" className="btn btn-ghost">
          Login
        </Link>
        <ThemeSelector />
      </div>
    </nav>
  );
};
export default Navbar;
