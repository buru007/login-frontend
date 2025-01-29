import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignupPage from "./Pages/signup";
import LoginPage from "./Pages/login";

function App() {
  return (
    <Router>
      <Routes>
        {/* Default Route to Show a Home Page */}
        <Route path="/" element={<h1>Welcome to the Login page</h1>} />
        
        {/* Authentication Routes */}
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
