import React from "react";
import { Link, useNavigate } from "react-router";
import { FaUserCircle } from "react-icons/fa";

function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = !!sessionStorage.getItem("token");

  const logout = () => {
    sessionStorage.clear();
    navigate("/login");
  };

  return (
    <nav className="custom-navbar">
      {/* Left */}
      <div className="nav-left">
        <Link to="/home" className="nav-brand">
          Student Portal
        </Link>
      </div>

      {/* Center */}
      <ul className="nav-center">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/courses">All Courses</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>

      {/* Right */}
      <div className="nav-right">
        {!isLoggedIn ? (
          <Link to="/login" className="login-button">
            Login
          </Link>
        ) : (
          <div className="profile-area">
            <Link to="/profile">
              <FaUserCircle size={28} />
            </Link>
            <button onClick={logout} className="logout-btn">
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
