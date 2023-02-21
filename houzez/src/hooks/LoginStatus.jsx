import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

export function LoginStatus() {
  const [logIn, setLogIn] = useState(false);

  // time to check status and add loading effect while the data is being fetched
  const [checkStatus, setCheckStatus] = useState(true);

  // check if the person is authenticated
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLogIn(true);
      }
      setCheckStatus(false);
    });
  }, []);
  return { logIn, checkStatus };
}
