import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuthContext } from "./context/AuthContext";

function App() {
  const {authUser} = useAuthContext();
  return (
    <body className="flex items-center justify-center h-screen p-4">
      <Routes>
        <Route path="/" element={authUser ? <Home /> : <Navigate to={"/login"} />} />
        <Route path="/login" element={authUser ? <Navigate to='/' /> : <Login />} />
        <Route path="/signup" element={authUser ? <Navigate to='/' /> : <SignUp />} />
      </Routes>
      <ToastContainer />
    </body>
  );
}

export default App;
