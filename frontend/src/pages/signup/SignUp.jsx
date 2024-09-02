import React, { useState } from "react";
import GenderCheckbox from "./GenderCheckbox";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignup();

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };
  return (
    <div className="flex flex-col items-center justify-center mx-auto min-w-96">
      <div className="w-full p-6 bg-gray-400 bg-opacity-0 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg">
        <h1 className="text-3xl font-bold text-center text-gray-300">
          Sign Up | <span className="text-blue-500">InstaLink</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="" className="p-2 label">
              <span className="text-sm label-text">Full name</span>
            </label>
            <input
              type="text"
              placeholder="Enter full name"
              className="w-full h-10 input input-bordered"
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
            />
          </div>

          <div>
            <label htmlFor="" className="p-2 label">
              <span className="text-sm label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full h-10 input input-bordered"
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
            />
          </div>

          <div>
            <label htmlFor="" className="p-2 label">
              <span className="text-sm label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full h-10 input input-bordered"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>

          <div>
            <label htmlFor="" className="p-2 label">
              <span className="text-sm label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm password"
              className="w-full h-10 input input-bordered"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          </div>

          <GenderCheckbox
            onCheckboxChange={handleCheckboxChange}
            selectedGender={inputs.gender}
          />

          <Link
            to="/login"
            className="inline-block mt-1 text-sm hover:underline hover:text-blue-600"
          >
            Already have account?
          </Link>
          <div>
            <button className="mt-2 btn btn-block btn-sm" disabled={loading}>
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
