import React from "react";
import "./Navbar.css";

export default function Navbar({ sidebarOpen, setSidebarOpen }) {
  return (
    <nav className="navbar">
      {/* MENU ICON */}
      <div className="menu-icon" onClick={() => setSidebarOpen(true)}>
        <i className="fas fa-bars"></i>
      </div>

      <h1 className="logo">AyushCare</h1>
    </nav>
  );
}
