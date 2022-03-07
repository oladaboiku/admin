import React from "react";
import "./topbar.css";
import { Notifications, Language, Settings } from "@mui/icons-material";

function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Flipkart</span>
        </div>
        <div className="topRight">
          <div className="iconsContainer">
            <Notifications />
            <span className="topIconBag">2</span>
          </div>
          <div className="iconsContainer">
            <Language />
            <span className="topIconBag">2</span>
          </div>
          <div className="iconsContainer">
              <Settings />
            </div>
          <img
            src="https://images.pexels.com/photos/10663495/pexels-photo-10663495.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="avatar"
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}

export default Topbar;
