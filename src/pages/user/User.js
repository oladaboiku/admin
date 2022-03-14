import React from "react";
import "./user.css";
import {  PermIdentity, CalendarToday, PhoneAndroid, MailOutline, LocationSearching, Publish } from "@mui/icons-material";

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
            <span className="userShowInfoTitle">1 25 1998</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon"/>
              <span className="userShowInfoTitle">+1 234 456 78</span>
            </div>
            <div className="userShowInfo">
              <MailOutline  className="userShowIcon"/>
              <span className="userShowInfoTitle">annabeck99@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching  className="userShowIcon"/>
              <span className="userShowInfoTitle">New York | USA</span>
            </div>
          </div>
        </div>
      <div className="userUpdate">
        <span className="userUpdateTitle">Edit</span>
        <form  className="userUpdateForm">
          <div className="userUpdateLeft">
            <div className="userUpdateItem">
              <label>Username</label>
              <input type="text" 
              placeholder="annabeck99" 
              className="userUpdateInput" 
              />
            </div>
            <div className="userUpdateItem">
              <label>Full Name</label>
              <input type="text" 
              placeholder="Anna Becker" 
              className="userUpdateInput" 
              />
            </div>
            <div className="userUpdateItem">
              <label>Email</label>
              <input type="text" 
              placeholder="annabeck99@gmail.com" 
              className="userUpdateInput" 
              />
            </div>
            <div className="userUpdateItem">
              <label>Phone</label>
              <input type="text" 
              placeholder="+1 234 567 89" 
              className="userUpdateInput" 
              />
            </div>
            <div className="userUpdateItem">
              <label>Address</label>
              <input type="text" 
              placeholder="New York | USA" 
              className="userUpdateInput" 
              />
            </div>
          </div>
          <div className="userUpdateRight">
            <div className="userUpdateUpload">
              <img src="https://images.pexels.com/photos/10832112/pexels-photo-10832112.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
               alt=""
               className="userUpdateImg" 
               />
              <label htmlFor="file"><Publish className="userUpdateIcon"/></label>
              <input type="file"  id="file" style={{display:"none"}}/>
            </div>
            <button className="userUpdateButton">Update</button>
          </div>
        </form>
      </div>
      </div>
    </div>
  );
}

export default User;
