import { useState, useEffect } from "react";
import Login from "./pages/login/Login";
import "./App.css";
import SignUp from "./pages/signup/SignUp";
import Home from "./pages/home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";
import HomeMobile from "./pages/home/HomeMobile";

function App() {
  const { authUser } = useAuthContext();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mobileMediaQuery = window.matchMedia("(max-width: 767px)"); // Adjust the breakpoint as needed

    const handleMobileChange = (event) => {
      setIsMobile(event.matches);
    };

    mobileMediaQuery.addEventListener("change", handleMobileChange);
    setIsMobile(mobileMediaQuery.matches);

    return () => {
      mobileMediaQuery.removeEventListener("change", handleMobileChange);
    };
  }, []);

  return (
    <>
      {isMobile ? (
        <div className="h-svh flex items-center justify-center">
          <Routes>
            <Route
              path="/"
              element={authUser ? <HomeMobile /> : <Navigate to="/login" />}
            />
            <Route
              path="/login"
              element={authUser ? <Navigate to="/" /> : <Login />}
            />
            <Route
              path="/signup"
              element={authUser ? <Navigate to="/" /> : <SignUp />}
            />
          </Routes>
          <Toaster />
        </div>
      ) : (
        <div className="p-4 h-screen flex items-center justify-center">
          <Routes>
            <Route
              path="/"
              element={authUser ? <Home /> : <Navigate to="/login" />}
            />
            <Route
              path="/login"
              element={authUser ? <Navigate to="/" /> : <Login />}
            />
            <Route
              path="/signup"
              element={authUser ? <Navigate to="/" /> : <SignUp />}
            />
          </Routes>
          <Toaster />
        </div>
      )}
    </>
  );
}

export default App;
