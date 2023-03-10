import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from "react";
import { toast } from "react-toastify";
import OAuth from "../components/OAuth";
// import OAuth from "./OAuth";

export default function ForgotPassword() {
  // hook for showing and hiding password set to false as we dont want to see password as a default
  const [email, getEmail] = useState("");

  function onchange(event) {
    getEmail(event.target.value);
  }

  // reset password function
  async function forgotPassword(e) {
    e.preventDefault();

    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      toast.success("Password reset link was sent! Check your email");
    } catch (error) {
      toast.error(`Could not send password reset link ${error}`);
      console.log(error);
    }
  }
  return (
    <section className="h-screen">
      <div className="px-6 h-full text-gray-800">
        <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full pt-0 g-6">
          <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
            <img
              src="https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              className="w-full rounded-2xl"
              alt="house"
            />
          </div>
          <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0 pt-0 py-8">
            <h1 className="text-xl text-red-500 mb-2 mt-0 pb-1">Forgot password ?</h1>
            <form onSubmit={forgotPassword}>
              <div className="flex flex-row items-center justify-center lg:justify-start">
                <OAuth />
              </div>

              <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                <p className="text-center font-semibold mx-4 mb-0">Or</p>
              </div>

              {/* <div className="flex justify-between items-center mb-6 mr-4"> */}
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

              <div className="flex justify-between items-center mr-4">
                <div className="form-group form-check"></div>
                <a href="Login" className="text-blue-600">
                  Login instead.
                </a>
              </div>
              <div className="text-center lg:text-left">
                <button
                  type="submit"
                  // onClick={}
                  className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  reset password
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
