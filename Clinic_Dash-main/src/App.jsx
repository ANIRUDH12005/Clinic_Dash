import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Notification from "./pages/Notification";
import Feed from "./pages/feed";
import PatientHistory from "./pages/PatientHistory";
import BillingInvoice from "./pages/BillingInvoice";
import SchedulePage from "./pages/SchedulePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/notifications" element={<Notification />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/patient-history" element={<PatientHistory />} />
        <Route path="/billing" element={<BillingInvoice />} />
        {/* <Route path="/schedule" element={<SchedulePage />} /> */}
        <Route path="/schedule" element={<div>Schedule test OK</div>} />

      </Routes>
    </Router>
  );
}

export default App;