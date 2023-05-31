import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/profile";
import ForgotPassword from "./pages/forgotPassword";
import Offers from "./pages/offers";
import Addlisting from "./pages/Addlisting";
import EditListing from "./pages/EditListing";

import Header from "./components/header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PrivateRoute } from "./components/PrivateRoute";
import Listing from "./pages/Listing";
import AllListings from "./pages/AllListings";
import { ChakraProvider } from "@chakra-ui/react";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
function App() {
  return (
    <>
      <ChakraProvider>
        <Router>
          <Header />
          <Routes>
            {/* home path  */}
            <Route path="/" element={<Home />}></Route>

            {/* terms of use path */}
            <Route path="/Terms-of-use" element={<Terms />}></Route>

            {/* privacy policies path  */}
            <Route path="/privacy-policy" element={<Privacy />}></Route>

            {/* All listings path  */}
            <Route path="/AllListings" element={<AllListings />}></Route>

            {/* about path  */}
            <Route path="/About" element={<About />}></Route>

            {/* contacts page  */}
            <Route path="/Contacts" element={<Contact />}></Route>

            {/* profile path  */}
            <Route path="/profile" element={<PrivateRoute />}>
              <Route path="/profile" element={<Profile />}></Route>
            </Route>

            {/* login path  */}
            <Route path="/Login" element={<Login />}></Route>

            {/* regiser path  */}
            <Route path="/register" element={<Register />}></Route>

            {/* forgot password path  */}
            <Route path="/forgotPassword" element={<ForgotPassword />}></Route>

            {/* offers path  */}
            <Route path="/offers" element={<Offers />}></Route>

            {/* listings path  */}
            <Route path="/category/:categoryName/:listingId" element={<Listing />}></Route>

            {/* add listing protected path  */}
            <Route path="/Add-Listing" element={<PrivateRoute />}>
              <Route path="/Add-Listing" element={<Addlisting />}></Route>
            </Route>

            {/* add a protected route to edit listing page  */}
            <Route path="/edit-listing" element={<PrivateRoute />}>
              <Route path="/edit-listing/:listingId" element={<EditListing />}></Route>
            </Route>
          </Routes>
        </Router>
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </ChakraProvider>
    </>
  );
}

export default App;
