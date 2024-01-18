import { useEffect } from "react";
import { LOGIN_FLAG } from "../config/constants";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (LOGIN_FLAG) {
      navigate("/");
    }
  }, [navigate]);

  return <div>Login</div>;
};

export default Login;
