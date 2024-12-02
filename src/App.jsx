import React from "react";

import Sidebar from "./Components/Sidebar/Sidebar";
import Header from "./Components/Header/Header";
import LeftPanel from "./Components/LeftPanel/LeftPanel";
import CenterPanel from "./Components/CenterPanel/CenterPanel";
import RightPanel from "./Components/RightPanel/RightPanel";
import Tabs from "./Components/Tabs/Tabs";
import "./index.css";

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Header />
        <Tabs />
        <div className="content">
          <LeftPanel />
          <CenterPanel />
          <RightPanel />
        </div>
      </div>
    </div>
  );
};

export default App;
