import "./Navbar.css"
import { Link } from "react-router-dom";
const Navbar = () => (
    <nav className="navbar">
      <h1 className="navbar-brand">DigiHelp</h1>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/tutorials">Tutorials</Link>
        <Link to="/ai-chat">AI Chat</Link>
        <Link to="/feedback">Feedback</Link>
        <Link to="/setting">⚙️</Link>
      </div>
    </nav>
  );

export default Navbar