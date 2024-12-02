import React from "react";
import "./CenterPanel.css";

const CenterPanel = () => {
  return (
    <div className="center-panel">
      <div className="conversation">
        <h4>Conversation</h4>
        <div className="message">
          <strong>Rachel Adams:</strong> Lorem ipsum dolor sit amet.
        </div>
        <div className="message">
          <strong>You:</strong> Thank you for your message.
        </div>
      </div>
      <textarea placeholder="Type a message..."></textarea>
      <button>Send</button>
    </div>
  );
};

export default CenterPanel;
