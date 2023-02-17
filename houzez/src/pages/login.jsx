import React, { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import OAuth from "../components/OAuth";
// import OAuth from "./OAuth";

export default function Login() {
  // hook for showing and hiding password set to false as we dont want to see password as a default
  const [viewPassword, setViewPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  function onchange(event) {
    setFormData((prevState) => ({
      // keep the preview state and just add a new one
      ...prevState,
      [event.target.id]: event.target.value,
    }));
  }

  return (
    <section className="h-screen">
      <div className="px-6 h-full text-gray-800">
        <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
          <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
            <img
              src="https://images.unsplash.com/photo-1560184897-ae75f418493e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
              className="w-full rounded-2xl"
              alt="house"
            />
          </div>
          <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
            <form>
              <h1 className="text-xl text-red-500 mb-2 mt-0 pb-1">Login</h1>
              <div className="flex flex-row items-center justify-center lg:justify-start">
                {/* <p class="text-lg mb-0 mr-4">Sign in with</p> */}
                <OAuth />
                {/* <a href="OAuth" class="pl-2 text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out">
                  OAuth
                </a> */}
              </div>

              <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                <p className="text-center font-semibold mx-4 mb-0">Or</p>
              </div>

              <div className="mb-6">
                <input
                  type="text"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="email"
                  placeholder="Email address"
                  value={email}
                  // whatever is typed in the email will be pushed as the value to the email var by onchange
                  onChange={onchange}
                />
              </div>

              <div className="mb-6 mt-4 relative">
                <input
                  type={viewPassword ? "text" : "password"}
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={onchange}
                />

                {viewPassword ? (
                  <AiFillEyeInvisible className="absolute top-1/2 transform -translate-y-1/2 right-3 cursor-pointer" onClick={() => setViewPassword((prevState) => !prevState)} />
                ) : (
                  <AiFillEye className="absolute top-1/2 transform -translate-y-1/2 right-3 cursor-pointer" onClick={() => setViewPassword((prevState) => !prevState)} />
                )}
              </div>

              <div className="flex justify-between items-center mb-6 mr-4">
                <div className="form-group form-check">
                  <input
                    type="checkbox"
                    className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-3 cursor-pointer"
                    id="exampleCheck2"
                  />
                  <label className="form-check-label inline-block text-gray-800" for="exampleCheck2">
                    Remember me
                  </label>
                </div>
                <a href="forgotPassword" className="text-blue-600">
                  Forgot password?
                </a>
              </div>

              <div className="text-center lg:text-left">
                <button
                  type="button"
                  className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Login
                </button>
                <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                  Don't have an account?
                  <a href="register" className="pl-2 text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out">
                    Register
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
