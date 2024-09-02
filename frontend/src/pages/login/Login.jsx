import React, { useState } from "react";
import { Link } from 'react-router-dom';
import useLogin from "../../hooks/useLogin";

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login({username, password});
  }

  return (
    <div className="flex flex-col items-center justify-center mx-auto min-w-96">
      <div className="w-full p-6 bg-gray-400 bg-opacity-0 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg">
        <h1 className="text-3xl font-bold text-center text-gray-300">
          Log In | <span className="text-blue-500">InstaLink</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="" className="p-2 label">
              <span className="text-sm label-text">Username</span>
            </label>
            <input
              type="text"
              className="w-full h-10 input input-bordered"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="" className="p-2 label">
              <span className="text-sm label-text">Password</span>
            </label>
            <input
              type="password"
              className="w-full h-10 input input-bordered"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Link
            to="/signup"
            className="inline-block mt-2 text-sm hover:underline hover:text-blue-600"
          >
            {"Don't"} have account?
          </Link>
          <div>
            <button className="mt-2 btn btn-block btn-sm" disabled={loading}>
              {loading ? <span className="loading loading-spinner"></span> : "Log In"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
