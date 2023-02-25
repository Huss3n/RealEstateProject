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

            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg mt-4 space-x-5 mb-4 w-full p-2">
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
          </form>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white uppercase text-sm px-7 py-3 font-medium rounded-3xl shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800 p-4 mt-4"
          >
            <Link to={"/add-listing"} className="flex justify-center items-center">
              <MdRealEstateAgent className="mr-2 text-3xl bg-red-400 rounded-full p-2 border-2" />
              Add a listing{" "}
            </Link>
          </button>
        </div>
      </section>
    </>
  );
}
