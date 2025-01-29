import Signup from "../Components/signup";
import { signup } from "../api/auth";
import '../Styles/signup.css';
const SignupPage = () => {
  const handleSignup = async (userData) => {
    try {
      const response = await signup(userData);
      alert(response.message);
    } catch (error) {
      alert(error.message);
    }
  };

  return <Signup onSignup={handleSignup} />;
};

export default SignupPage;
