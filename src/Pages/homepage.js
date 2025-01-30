import { useNavigate } from "react-router-dom";
import "../Styles/home.css"; 

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>Welcome to the Login Page</h1>
      <div className="button-container">
        <button className="home-button" onClick={() => navigate("/signup")}>Signup</button>
        <button className="home-button" onClick={() => navigate("/login")}>Login</button>
      </div>
    </div>
  );
}

export default HomePage;
