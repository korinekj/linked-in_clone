import React from "react";
import "./header.scss";

import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";

import LinkedInLogo from "../../assets/linkedin_logo.svg";

import HeaderOption from "./HeaderOption";

function Header() {
  return (
    <header className='header'>
      <div className='header__left'>
        <img src={LinkedInLogo} alt='linkedIn logo' />

        <div className='header__search'>
          <SearchIcon />
          <input type='text' name='' id='' />
        </div>
      </div>

      <div className='header__right'>
        <ul>
          <HeaderOption Icon={HomeIcon} title='Home' />
          <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
        </ul>
      </div>
    </header>
  );
}

export default Header;
