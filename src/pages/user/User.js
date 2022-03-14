import React from "react";
import "./user.css";
import {  PermIdentity, CalendarToday, PhoneAndroid, MailOutline, LocationSearching } from "@mui/icons-material";

function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="useTitle">Edit User</h1>
        <button className="userAddButton">Create</button>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://images.pexels.com/photos/10832112/pexels-photo-10832112.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUserName">Anna Becker</span>
              <span className="userShowUserTitle">Software engineer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">annabeck99</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon"/>
            <span className="userShowInfoDate">1 25 1998</span>
            </div>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon"/>
              <span className="userShowInfoPhone">+1 234 456 78</span>
            </div>
            <div className="userShowInfo">
              <MailOutline  className="userShowIcon"/>
              <span className="userShowInfoMail">annabeck99@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching  className="userShowIcon"/>
              <span className="userShowInfoLocation">New York | USA</span>
            </div>
          </div>
        </div>
      </div>
      <div className="userUpdate"></div>
    </div>
  );
}

export default User;
