import React from "react";
import "./sidebar.scss";

import Avatar from "@mui/material/Avatar";

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar__top'>
        <img
          src='https://images.unsplash.com/photo-1528460033278-a6ba57020470?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80'
          alt=''
        />
        <Avatar className='sidebar__avatar' />
        <h2>Jarda Kořínek</h2>
        <h4>korinek14.j@gmail.com</h4>
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
      </div>
    </div>
  );
}

export default Sidebar;
