import { useEffect, useState } from "react";
import { LOGIN_FLAG } from "../config/constants";
import { useNavigate } from "react-router-dom";

import iconChatBPT from "../assets/logo-full.png";
import EyeSlashIcon from "../components/icons/eye-slash";
import EyeIcon from "../components/icons/eye";

const Login = () => {
  const navigate = useNavigate();
  const [isShowPassword, setShowPassword] = useState<boolean>(false);

  useEffect(() => {
    if (LOGIN_FLAG) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="bg-primaryBlue min-h-screen w-full flex justify-center items-center p-8">
      <div className="max-w-md w-full flex flex-col items-center gap-8">
        <img
          src={iconChatBPT}
          className="max-w-xs w-full aspect-[3/1] object-cover object-center"
        />
        <form className="w-full flex flex-col gap-4">
          <input
            className="px-8 py-3 rounded-3xl w-full outline-none border-none"
            placeholder="Username"
          />
          <div className="w-full relative">
            <input
              className="px-8 py-3 rounded-3xl w-full outline-none border-none"
              placeholder="Password"
              type={isShowPassword ? "text" : "password"}
            />
            {isShowPassword ? (
              <EyeSlashIcon
                className="absolute top-1/2 -translate-y-1/2 right-4"
                color="#000000"
                height={24}
                width={24}
                onClick={() => setShowPassword(false)}
              />
            ) : (
              <EyeIcon
                className="absolute top-1/2 -translate-y-1/2 right-4"
                color="#000000"
                height={24}
                width={24}
                onClick={() => setShowPassword(true)}
              />
            )}
          </div>
          <button className="bg-white text-primaryBlue p-3 rounded-3xl font-semibold text-xl">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
