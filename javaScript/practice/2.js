import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from "react-router-dom";
import axios from "axios";
import "tailwindcss/tailwind.css";

const isAuthenticated = () => {
  return localStorage.getItem("token") !== null;
};

const ProtectedRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" />;
};

const Login = ({ setAuth }) => {
  const handleLogin = async () => {
    const res = await axios.post("http://localhost:5000/api/login", { email: "test@test.com", password: "123456" });
    localStorage.setItem("token", res.data.token);
    setAuth(true);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl mb-4">Login</h2>
      <button onClick={handleLogin} className="bg-blue-500 text-white p-2 rounded">Login</button>
      <p className="mt-4">Don't have an account? <Link to="/signup" className="text-blue-600">Sign up</Link></p>
    </div>
  );
};

const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl mb-4">Signup</h2>
      <button className="bg-green-500 text-white p-2 rounded">Sign Up</button>
      <p className="mt-4">Already have an account? <Link to="/login" className="text-blue-600">Login</Link></p>
    </div>
  );
};

const CollegeList = () => {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/colleges", {
      headers: { Authorization: Bearer ${localStorage.getItem("token")} }
    }).then(res => setColleges(res.data));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">College List</h2>
      <ul>
        {colleges.map(college => (
          <li key={college.id} className="border p-2 my-2">{college.name}</li>
        ))}
      </ul>
    </div>
  );
};

const Navbar = ({ setAuth }) => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    setAuth(false);
  };

  return (
    <nav className="bg-gray-800 p-4 flex justify-between text-white">
      <h1>College App</h1>
      <button onClick={handleLogout} className="bg-red-500 p-2 rounded">Logout</button>
    </nav>
  );
};

const App = () => {
  const [auth, setAuth] = useState(isAuthenticated());

  return (
    <Router>
      {auth && <Navbar setAuth={setAuth} />}
      <Routes>
        <Route path="/login" element={<Login setAuth={setAuth} />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/colleges"
          element={
            <ProtectedRoute>
              <CollegeList />
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<Navigate to="/colleges" />} />
      </Routes>
    </Router>
  );
};