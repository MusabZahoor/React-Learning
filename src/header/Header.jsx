import "./Header.css";
import Home from "../content/home/Home";
const Header = () => {
  return (
    <>
      <nav className="navbar">
        <h1 className="logo">First Header</h1>
        <ul className="nav-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Header;
