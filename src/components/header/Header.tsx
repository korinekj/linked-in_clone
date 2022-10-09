import React from "react";
import "./header.css";

import SearchIcon from "@mui/icons-material/Search";

import LinkedInLogo from "../../assets/linkedin_logo.svg";

function Header() {
  return (
    <header className='header'>
      <section className='header__left'>
        <img src={LinkedInLogo} alt='linkedIn logo' />

        <div className='header__search'>
          <SearchIcon />
          <input type='text' name='' id='' />
        </div>
      </section>

      <nav className='header__right'>
        <h1>nav</h1>
      </nav>
    </header>
  );
}

export default Header;
