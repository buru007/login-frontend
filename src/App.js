import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignupPage from "./Pages/signup";
import LoginPage from "./Pages/login";
import HomePage from "./Pages/homepage";  // Moved HomePage to a separate file
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Default Route to Show a Home Page with Buttons */}
        <Route path="/" element={<HomePage />} />
        
        {/* Authentication Routes */}
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
