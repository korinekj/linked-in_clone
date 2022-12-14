import React from "react";
import "./header.scss";

import { useDispatch } from "react-redux";

import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";

import LinkedInLogo from "../../assets/linkedin_logo.svg";
import ProfileAvatar from "../../assets/me.jpg";

import HeaderOption from "./HeaderOption";

import { auth, signOut } from "../../firebase";
import { logout } from "../../features/userSlice";

function Header() {
  const dispatch = useDispatch();

  const handleClick = (event: React.MouseEvent<HTMLHeadingElement>) => {
    event.stopPropagation();

    console.log("Heading clicked");

    signOut(auth)
      .then(() => {
        // Sign-out succesfull.
        dispatch(logout());
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  return (
    <header className='header'>
      <div className='header__left'>
        <img src={LinkedInLogo} alt='linkedIn logo' />

        <div className='header__search'>
          <SearchIcon />
          <input type='text' placeholder='Search' name='' id='' disabled />
        </div>
      </div>

      <div className='header__right'>
        <HeaderOption Icon={HomeIcon} title='Home' />
        <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
        <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
        <HeaderOption Icon={ChatIcon} title='Messaging' />
        <HeaderOption Icon={NotificationsIcon} title='Notifications' />
        <HeaderOption
          avatar={ProfileAvatar}
          title='Sign Out'
          onClick={handleClick}
        />
      </div>
    </header>
  );
}

export default Header;
