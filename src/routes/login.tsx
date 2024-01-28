import { useEffect, useState } from "react";
import { LOGIN_FLAG } from "../config/constants";
import { useNavigate } from "react-router-dom";

import iconChatBPT from "../assets/logo-full.png";
import EyeSlashIcon from "../components/icons/eye-slash";
import EyeIcon from "../components/icons/eye";
import { accessTokenLocalstorage } from "../utils/localstorage";
import { authServices } from "../services/auth";
import Alert from "../components/ui/alert";

const Login = () => {
  const navigate = useNavigate();
  const [isShowPassword, setShowPassword] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (LOGIN_FLAG || accessTokenLocalstorage.get()) {
      navigate("/");
    }
  }, [navigate]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isLoading) {
      try {
        setLoading(true);
        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData.entries());
        if (
          data?.username &&
          typeof data.username === "string" &&
          data?.password &&
          typeof data.password === "string"
        ) {
          const response = await authServices.login(
            data.username,
            data.password
          );

          if (response.success) {
            accessTokenLocalstorage.set(response?.data as string);

            navigate("/");
          } else {
            setError(response?.data || "Something went wrong!");
          }
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError("Something went wrong!");
      }
    }
  };

  return (
    <div className="bg-primaryBlue min-h-screen w-full flex justify-center items-center p-8">
      <div className="max-w-md w-full flex flex-col items-center gap-8">
        {error && <Alert>{error}</Alert>}
        <img
          src={iconChatBPT}
          className="max-w-xs w-full aspect-[3/1] object-cover object-center"
        />
        <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            className="px-8 py-3 rounded-3xl w-full outline-none border-none"
            placeholder="Username"
            name="username"
          />
          <div className="w-full relative">
            <input
              className="px-8 py-3 rounded-3xl w-full outline-none border-none"
              placeholder="Password"
              name="password"
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
          <button
            className="bg-white text-primaryBlue p-3 rounded-3xl font-semibold text-xl"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
