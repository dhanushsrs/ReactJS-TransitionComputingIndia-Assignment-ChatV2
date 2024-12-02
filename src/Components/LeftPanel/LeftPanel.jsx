import React from "react";
import "./LeftPanel.css";

const LeftPanel = () => {
  return (
    <div className="left-panel">
      <h4>Hannibal Smith</h4>
      <p>Customer ID: 12345</p>
      <p>Email: rich@example.com</p>
      <p>Phone: 800123456</p>
      <p>Loyalty Tier: Silver</p>
      <p>Lifetime Value: 3M</p>
      <p>Engagement Score: 80%</p>
      <button>Assign Other Agent</button>
    </div>
  );
};

export default LeftPanel;
