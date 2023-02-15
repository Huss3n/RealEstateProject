import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import SignIn from "./pages/signIn";
import Profile from "./pages/profile";
import SignUp from "./pages/signUp";
import ForgotPassword from "./pages/forgotPassword";
import Offers from "./pages/offers";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/sign-in" element={<SignIn />}></Route>
          <Route path="/sign-up" element={<SignUp />}></Route>
          <Route path="/forgot-password" element={<ForgotPassword />}></Route>
          <Route path="/offers" element={<Offers />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
