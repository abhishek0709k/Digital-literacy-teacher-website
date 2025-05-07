import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h3>DigiHelp</h3>
          <p>Empowering digital literacy for everyone.</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/tutorials">Tutorials</Link></li>
            <li><Link to="/ai-chat">AI Chat</Link></li>
            <li><Link to="/feedback">Feedback</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: abhishekkumarsingh841441@gmail.com</p>
          <p>Phone: +91 9572296517</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} DigiHelp. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
