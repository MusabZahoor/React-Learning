import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <h2 className="footer-logo">First Footer</h2>

          <ul className="footer-links">
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>

          <p className="footer-copy">
            © {new Date().getFullYear()}- All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
};
export default Footer;
