import React from "react";
import "./Tabs.css";

const Tabs = () => {
  const tabs = [
    { id: 1, name: "Cheyenne Bergson", initials: "CB", notifications: 0 },
    { id: 2, name: "Jonathan Higgins", initials: "CB", notifications: 0 },
    { id: 3, name: "Capt. Trunk", initials: "CB", notifications: 0 },
    {
      id: 4,
      name: "Hannibal Smith",
      initials: "CB",
      notifications: 2,
      active: true,
    },
    { id: 5, name: "Capt. Trunk", initials: "CB", notifications: 0 },
  ];

  return (
    <div className="tabs">
      {tabs.map((tab) => (
        <div
          key={tab.id}
          className={`tab ${tab.active ? "active" : ""}`}
          title={tab.name}
        >
          <div className="tab-icon">
            <span>{tab.initials}</span>
          </div>
          <div className="tab-name">
            {tab.name.length > 15
              ? `${tab.name.substring(0, 12)}...`
              : tab.name}
          </div>
          {tab.notifications > 0 && (
            <div className="tab-notifications">{tab.notifications}</div>
          )}
        </div>
      ))}
      <button className="messaging-btn">Messaging</button>
    </div>
  );
};

export default Tabs;
