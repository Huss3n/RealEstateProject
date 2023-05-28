import React from "react";
import { FcGoogle } from "react-icons/fc";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { toast } from "react-toastify";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router";

export default function OAuth() {
  const navigate = useNavigate();
  async function signInwithGoogle() {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // check if user exists in the db
      const userRef = doc(db, "users", user.uid);

      // geting the user if available it will be added to user user snap
      const docSnap = await getDoc(userRef);
      if (!docSnap.exists()) {
        await setDoc(userRef, {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }
      // toast.success((= "login" ? "Sign up successful" : "Login successful"));
      navigate("/");
    } catch (error) {
      toast.error("Could not authorize Google sign in");
    }
  }

  return (
    <button
      type="button"
      onClick={signInwithGoogle}
      className=" 
      flex
      justify-center
      w-full
      px-7
      py-3
      bg-red-600
      md:bg-red-400
      text-white
      font-medium
      text-sm
      leading-snug
      uppercase
      rounded-2xl
      shadow-md
      hover:bg-red-600
      hover:shadow-lg
      focus:bg-red-700
      focus:shadow-lg
      focus:outline-none
      focus:ring-0
      active:bg-red-800
      active:shadow-lg
      transition
      duration-150
      ease-in-out"
    >
      <FcGoogle className="text-xl bg-white rounded-full mr-3" />
      Continue with google
    </button>
  );
}
