import React from "react";
import Sidebar from "../components/Sidebar";
import "./SchedulePage.css";

export default function SchedulePage() {
  return (
    <div style={{ display: "flex" }}>
      {/* Sidebar */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <div className="schedule-container">

        <h2 className="schedule-heading">Appointment Schedule</h2>
        <p className="schedule-subtitle">
          View, manage and update patient appointments.
        </p>

        {/* Add Appointment Button */}
        <div className="schedule-actions">
          <button className="add-btn">+ Add New Appointment</button>
        </div>

        {/* Appointment Table */}
        <div className="schedule-table-wrapper">
          <table className="schedule-table">
            <thead>
              <tr>
                <th>Patient</th>
                <th>Therapy</th>
                <th>Date</th>
                <th>Time</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Ayushi Soni</td>
                <td>Nasya</td>
                <td>12 Dec 2025</td>
                <td>11:00 AM</td>
                <td><span className="status scheduled">Scheduled</span></td>
              </tr>

              <tr>
                <td>Rahul Verma</td>
                <td>Basti</td>
                <td>13 Dec 2025</td>
                <td>2:00 PM</td>
                <td><span className="status completed">Completed</span></td>
              </tr>

              <tr>
                <td>Pooja Mehra</td>
                <td>Virechana</td>
                <td>13 Dec 2025</td>
                <td>4:00 PM</td>
                <td><span className="status cancelled">Cancelled</span></td>
              </tr>

            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
