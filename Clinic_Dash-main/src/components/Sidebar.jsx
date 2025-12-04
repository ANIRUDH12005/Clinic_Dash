import React from "react";
import "./Sidebar.css";

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
  return (
    <>
      {/* DARK OVERLAY */}
      <div
        className={`sidebar-overlay ${sidebarOpen ? "show" : ""}`}
        onClick={() => setSidebarOpen(false)}
      ></div>

      {/* SIDEBAR PANEL */}
      <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <h2>Panchakarma</h2>
          <span className="close-btn" onClick={() => setSidebarOpen(false)}>
            ✕
          </span>
        </div>

        <ul className="sidebar-menu">
          <li>🏠 Home</li>
          <li>📅 Schedule</li>
          <li>📈 Progress Tracking</li>
          <li>🔔 Notifications</li>
          <li>📄 Billing & Invoices</li>
          <li>👤 Patient History</li>
          <li>🧘 Panchakarma Centres</li>
          <li>💬 Feedback</li>
        </ul>
      </aside>
    </>
  );
}
