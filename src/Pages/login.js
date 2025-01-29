import Login from "../Components/login";
import { login } from "../api/auth";
import '../Styles/login.css';
const LoginPage = () => {
  const handleLogin = async (userData) => {
    try {
      const response = await login(userData);
      alert("Login Successful");
      console.log(response); // Handle token storage if needed
    } catch (error) {
      alert(error.message);
    }
  };

  return <Login onLogin={handleLogin} />;
};

export default LoginPage;
