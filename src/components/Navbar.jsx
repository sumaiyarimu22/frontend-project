import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="logo">
        <h1>proReader</h1>
      </Link>
      <ul className="menu-items">
        <li>
          <NavLink
            to="/home"
            className={({ isActive }) => (isActive ? "itemHover" : "item")}
          >
            home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/books"
            className={({ isActive }) => (isActive ? "itemHover" : "item")}
          >
            books
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "itemHover" : "item")}
          >
            about us
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
