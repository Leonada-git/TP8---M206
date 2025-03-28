import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Header from "./components/Header";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./components/home";
import Register from "./components/Register";
import MangeUser from "./components/MangeUser";
import UpdateUser from "./components/UpdateUser";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <div style={{ padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/manage_users" element={<PrivateRoute><MangeUser /></PrivateRoute>} />
            <Route path="/update_user/:id" element={<PrivateRoute><UpdateUser /></PrivateRoute>} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
