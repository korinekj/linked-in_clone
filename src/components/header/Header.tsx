import React from "react";
import "./header.scss";

import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";

import LinkedInLogo from "../../assets/linkedin_logo.svg";
import ProfileAvatar from "../../assets/me.jpg";

import HeaderOption from "./HeaderOption";

function Header() {
  return (
    <header className='header'>
      <div className='header__left'>
        <img src={LinkedInLogo} alt='linkedIn logo' />

        <div className='header__search'>
          <SearchIcon />
          <input type='text' placeholder='Search' name='' id='' />
        </div>
      </div>

      <div className='header__right'>
        <HeaderOption Icon={HomeIcon} title='Home' />
        <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
        <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
        <HeaderOption Icon={ChatIcon} title='Messaging' />
        <HeaderOption Icon={NotificationsIcon} title='Notifications' />
        <HeaderOption avatar={ProfileAvatar} title='Me' />
      </div>
    </header>
  );
}

export default Header;
