import "./Header.css";
import Home from "../content/home/Home";
import {NavLink} from "react-router-dom";
const Header = () => {
  return (
    <>
      <nav className="navbar">
        <h1 className="logo">First Header</h1>
        <ul className="nav-links">
          <NavLink to="/">Home</NavLink><br />
          <NavLink to="/about/About">About Us</NavLink><br />
          <NavLink to="/ContactUs">Contact Us</NavLink>

        </ul>
      </nav>
    </>
  );
};
export default Header;
