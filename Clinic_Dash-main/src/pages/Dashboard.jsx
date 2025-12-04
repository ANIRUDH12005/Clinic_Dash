import React from "react";
import Sidebar from "../components/Sidebar";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div style={{ display: "flex" }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="dashboard-container">
        <h2 className="dashboard-heading">Dashboard</h2>
        <p className="dashboard-subtitle">
          Overview of clinic KPIs and quick actions.
        </p>

        <div className="stats-grid">
          <div className="stat-card">
            <h3>120</h3>
            <p>Active Patients</p>
          </div>

          <div className="stat-card">
            <h3>8</h3>
            <p>Appointments Today</p>
          </div>

          <div className="stat-card">
            <h3>24</h3>
            <p>Pending Invoices</p>
          </div>

          <div className="stat-card">
            <h3>3</h3>
            <p>New Feedback</p>
          </div>
        </div>
      </div>
    </div>
  );
}
