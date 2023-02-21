import React, { useState } from "react";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router";

export default function Profile() {
  const auth = getAuth();
  const [userData, setUserData] = useState({
    username: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });

  const { username, email } = userData;

  const navigate = useNavigate();
  // signout function
  function signout() {
    auth.signOut();
    navigate("/");
  }
  return (
    <>
      <section className="flex justify-content flex-col items-center max-width-4xl mx-auto">
        <h1 className="text-2xl text-center mt-6 font-bold">My profile</h1>

        {/* user details  */}
        <div className="w-full md:w-[50%] mt-6 px-3">
          <form>
            <input type="text" id="name" value={username} disabled className="w-full px-4 py-2 text-xl text-gray-500 bg-white border-gray-300 rounded transition ease-in-out" />
            <input type="text" id="email" value={email} disabled className="w-full px-4 py-2 text-xl text-gray-500 bg-white border-gray-300 rounded transition ease-in-out mt-6" />
          </form>
        </div>

        {/* edit details  */}
        <div className="flex justify-end whitespace-nowrap text-sm sm:text-lg mt-4 space-x-5 mb-4">
          <p className="pr-1 text-blue-400 flex items-center">
            Edit profile:
            <span className="cursor-pointer text-decoration-line: underline text-red-400 ml-3 hover:text-xl transition ease-in-out duration-150">🖍️</span>
          </p>
          <p className="pl-28 text-blue-400 cursor-pointer hover:text-red-400 transition ease-out duration-200" onClick={signout}>
            Sign out
          </p>
        </div>
      </section>
    </>
  );
}
