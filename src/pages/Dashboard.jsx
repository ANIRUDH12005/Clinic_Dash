import React from "react";

export default function Dashboard() {
  return (
    <div className="page-card">
      <h2>Dashboard</h2>
      <p className="muted">Overview of clinic KPIs and quick actions.</p>

      <div className="grid-cards">
        <div className="stat-card">
          <h3>120</h3>
          <p className="muted">Active Patients</p>
        </div>

        <div className="stat-card">
          <h3>8</h3>
          <p className="muted">Appointments Today</p>
        </div>

        <div className="stat-card">
          <h3>24</h3>
          <p className="muted">Pending Invoices</p>
        </div>

        <div className="stat-card">
          <h3>3</h3>
          <p className="muted">New Feedback</p>
        </div>
      </div>
    </div>
  );
}
