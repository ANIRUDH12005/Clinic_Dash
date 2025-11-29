import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUserInjured,
  FaBell,
  FaCalendarAlt,
  FaBoxes,
  FaFileInvoiceDollar,
  FaChartLine,
  FaHistory,
  FaCommentDots,
  FaCog,
  FaMapMarkerAlt,
} from "react-icons/fa";

/**
 * Sidebar with grouped sections, icons and sticky footer.
 * Accepts sidebarOpen prop to control slide-in/out.
 */
export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
  return (
    <>
      <aside className={`clinic-sidebar ${sidebarOpen ? "open" : ""}`} aria-hidden={!sidebarOpen}>
        <nav className="side-inner">
          {/* Main */}
          <div className="menu-group">
            <NavLink to="/dashboard" className="side-link">
              <FaTachometerAlt className="side-icon" />
              <span className="side-text">Dashboard</span>
            </NavLink>

            <NavLink to="/patients" className="side-link">
              <FaUserInjured className="side-icon" />
              <span className="side-text">Patients</span>
            </NavLink>

            <NavLink to="/notifications" className="side-link disabled">
              <FaBell className="side-icon" />
              <span className="side-text">Notifications</span>
            </NavLink>
          </div>

          {/* Management heading */}
          <div className="side-heading">MANAGEMENT</div>
          <div className="menu-group">
            <NavLink to="/therapy" className="side-link">
              <FaCalendarAlt className="side-icon" />
              <span className="side-text">Therapy Appointments</span>
            </NavLink>

            <NavLink to="/inventory" className="side-link">
              <FaBoxes className="side-icon" />
              <span className="side-text">Inventory Management</span>
            </NavLink>

            <NavLink to="/billing" className="side-link">
              <FaFileInvoiceDollar className="side-icon" />
              <span className="side-text">Billing & Invoicing</span>
            </NavLink>
          </div>

          {/* Reports */}
          <div className="side-heading">REPORTS</div>
          <div className="menu-group">
            <NavLink to="/reports" className="side-link">
              <FaChartLine className="side-icon" />
              <span className="side-text">Reports & Analytics</span>
            </NavLink>

            <NavLink to="/patient-history" className="side-link">
              <FaHistory className="side-icon" />
              <span className="side-text">Patient History</span>
            </NavLink>
          </div>

          {/* Feedback */}
          <div className="side-heading">FEEDBACK</div>
          <div className="menu-group">
            <NavLink to="/feedback" className="side-link">
              <FaCommentDots className="side-icon" />
              <span className="side-text">Feedback</span>
            </NavLink>
          </div>

          {/* Footer sticky */}
          <div className="sidebar-footer">
            <div className="clinic-info">
              <div className="clinic-mini">AyushCare Clinic</div>
              <div className="clinic-small muted">+91 98765 43210</div>
            </div>

            <NavLink to="/settings" className="side-link small">
              <FaCog className="side-icon" />
              <span className="side-text">Settings</span>
            </NavLink>
          </div>
        </nav>
      </aside>

      {/* overlay for mobile */}
      <div
        className={`sidebar-overlay ${sidebarOpen ? "visible" : ""}`}
        onClick={() => setSidebarOpen(false)}
        aria-hidden={!sidebarOpen}
      />
    </>
  );
}
