import { Link } from "react-router-dom";
import "./Home.css"

const Home = () => (
    <div className="home">
      <h2 className="home-title">Empowering Digital Literacy!</h2>
      <p className="home-description">Helping parents and elders easily learn digital tools step-by-step.</p>
      <Link to={"/tutorials"} className="primary-button">Start Learning</Link>
    </div>
  );
export default Home