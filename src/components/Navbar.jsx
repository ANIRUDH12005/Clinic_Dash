import React from "react";
import { FaBars, FaBell, FaSearch, FaUserCircle } from "react-icons/fa";

export default function Navbar({ sidebarOpen, setSidebarOpen }) {
  return (
    <header className="clinic-navbar">
      <div className="nav-left">
        <button
          className="hamburger"
          aria-label="Toggle menu"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <FaBars />
        </button>

        <div className="brand">
          <div className="logo">🩺</div>
          <div className="brand-text">
            <div className="clinic-name">AyushCare Clinic</div>
            <div className="clinic-sub">Panchakarma & Wellness</div>
          </div>
        </div>
      </div>

      <div className="nav-center">
        <div className="search">
          <FaSearch className="search-icon" />
          <input placeholder="Search patients, appointments..." />
        </div>
      </div>

      <div className="nav-right">
        <button className="icon-btn" title="Notifications"><FaBell /></button>
        <button className="profile-btn" title="Profile">
          <FaUserCircle />
        </button>
      </div>
    </header>
  );
}
