import React from "react";
import "./sidebar.scss";

import Avatar from "@mui/material/Avatar";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";

function Sidebar() {
  const user = useSelector(selectUser);

  console.log(user);

  const recentItem = (topic: string): JSX.Element => (
    <div className='sidebar__recentItem'>
      <span className='sidebar__hash'>#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className='sidebar'>
      <div className='sidebar__top'>
        <img
          src='https://images.unsplash.com/photo-1528460033278-a6ba57020470?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80'
          alt=''
        />
        <Avatar
          src={user?.photoUrl}
          className='sidebar__avatar'
          alt='sidebar avatar'
        >
          {user?.email[0]}
        </Avatar>

        <h2>{user?.displayName}</h2>
        <h4>{user?.email}</h4>
      </div>
      <div className='sidebar__stats'>
        <div className='sidebar__stat'>
          <p>Who viewed you</p>
          <p className='sidebar__statNumber'>2,456</p>
        </div>
        <div className='sidebar__stat'>
          <p>Views on posts</p>
          <p className='sidebar__statNumber'>1337</p>
        </div>
      </div>
      <div className='sidebar__bottom'>
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("software engineering")}
        {recentItem("design")}
        {recentItem("developer")}
      </div>
    </div>
  );
}

export default Sidebar;
