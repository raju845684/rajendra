import React from "react";
import HeaderAmin from "./HeaderAmin";
import SidebarAdmin from "./SidebarAdmin";
import MainAdmin from "./MainAdmin";
import { Tab } from "react-bootstrap";

const Dashbord = () => {
  return (
    <div className="d-flex">
      <SidebarAdmin />
      <div className="admin-main">
        <HeaderAmin />
        <div className="p-3">
          <Tab.Content>
            <Tab.Pane eventKey="first">First tab content</Tab.Pane>
            <Tab.Pane eventKey="second">Second tab content</Tab.Pane>
          </Tab.Content>
          <MainAdmin />
        </div>
      </div>
    </div>
  );
};

export default Dashbord;
