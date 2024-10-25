import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";

function Login() {
  const [message, setMessage] = useState("");

  const { loginUser, signinWithGoogle } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await loginUser(data.email, data.password);
      alert("Login successful!");
      navigate("/");
    } catch (error) {
      setMessage("Please provide a valid email & password");
      console.error(error);
    }
  };
  // Login w google
  const handleGoogleSignIn = async () => {
    try {
      await signinWithGoogle();
      alert("Login successful!");

      navigate("/");
    } catch (error) {
      setMessage("Google signin failed");
      console.error(error);
    }
  };

  return (
    <div className="h-[calc(100vh - 120px)] flex justify-center">
      <div className="w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-xl font-semibold mb-4">Please Login</h2>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-grey-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-grey-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              {...register("password", { required: true })}
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow"
            />
          </div>
          {message && (
            <p className="text-red-500 text-xs italic mb-3">{message}</p>
          )}
          <div className="">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none">
              Login
            </button>
          </div>
        </form>
        <p className="align-baseline font-medium mt-4 text-sm">
          Don&apos;t have an account? Please{" "}
          <Link to="/register" className="text-blue-500 hover:text-blue-700">
            Register
          </Link>
        </p>
        {/* google sign in */}
        <div className="mt-4 ">
          <button
            onClick={handleGoogleSignIn}
            className="w-full flex flex-wrap gap-1 items-center justify-center bg-secondary  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none "
          >
            <FaGoogle className="mr-2" />
            Sign in with Google
          </button>
        </div>
        <p className="mt-5 text-center text-grey-500 text-xs">
          2025 Book store. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Login;
