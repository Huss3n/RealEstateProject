import React, { useState } from "react";
import { getAuth, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { doc, updateDoc } from "firebase/firestore";
// import { db } from "firebase/firestore";
import { db } from "../firebase";
import { MdRealEstateAgent } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Profile() {
  const auth = getAuth();
  const [userData, setUserData] = useState({
    username: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });

  const { username, email } = userData;

  const navigate = useNavigate();

  // edit details
  const [editDetails, setEditDetails] = useState(false);

  function onEdit(e) {
    setUserData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }
  // signout function
  function signout() {
    auth.signOut();
    navigate("/");
  }
  // submit changes to firebase auth
  async function onSubmit() {
    try {
      if (auth.currentUser.displayName !== username) {
        // submit new display name
        await updateProfile(auth.currentUser, {
          displayName: username,
        });
        // submit new name to firestore
        const userRef = doc(db, "users", auth.currentUser.uid);
        await updateDoc(userRef, {
          username,
        });
      }
      toast.success("Username updated!");
    } catch (error) {
      toast.error(`Could not update profile ${error}`);
    }
  }
  return (
    <>
      <section className="flex justify-content flex-col items-center max-width-4xl mx-auto">
        <h1 className="text-2xl text-center mt-6 font-bold">My profile</h1>

        {/* user details  */}
        <div className="w-full md:w-[50%] mt-6 px-3">
          <form>
            <input
              type="text"
              id="username"
              value={username}
              disabled={!editDetails}
              onChange={onEdit}
              className={`w-full px-4 py-2 text-xl text-gray-500 bg-white border-gray-300 rounded transition ease-in-out ${editDetails && "bg-red-200 focus:bg-red-300"}`}
            />
            <input type="text" id="email" value={email} disabled className="w-full px-4 py-2 text-xl text-gray-500 bg-white border-gray-300 rounded transition ease-in-out mt-6" />
          </form>
        </div>

        {/* edit details  */}
        <div className="flex justify-end whitespace-nowrap text-sm sm:text-lg mt-4 space-x-5 mb-4">
          <p className="pr-1 text-blue-400 flex items-center">
            Edit profile:
            <span
              className="cursor-pointer text-decoration-line: underline text-red-400 ml-3 hover:text-xl transition ease-in-out duration-150"
              onClick={() => {
                editDetails && onSubmit();
                setEditDetails((prevState) => !prevState);
              }}
            >
              {editDetails ? "Save" : "🖍️"}
            </span>
          </p>
          <p className="pl-28 text-blue-400 cursor-pointer hover:text-red-400 transition ease-out duration-200" onClick={signout}>
            Sign out
          </p>
        </div>
        {/* <div className="w-full flex justify-center">
          <Link to={"/create-listing "}>
            <button
              className="flex justify-start items-center space-x-10 p-2 bg-blue-600 text-white uppercase px-7 w-full py-3 text-sm font-medium rounded-lg shadow-md hover:bg-blue-700 transition ease-out duration-150 hover:shadow-xl active:bg-blue-900"
              type="submit"
            >
              <MdRealEstateAgent className="mr-2 text-3xl bg-black rounded-full p-1 border-2" />
              Sell or rent your home
            </button>
          </Link>
        </div> */}
      </section>
    </>
  );
}
