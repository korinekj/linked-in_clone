import React, { useState } from "react";
import "./login.scss";

function Login() {
  const [name, setName] = useState<string>("");
  const [profilePicURL, setProfilePicURL] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const register = () => {
    if (!name) {
      alert("Please enter your full name");
    }
  };
  const loginToApp = () => {};

  return (
    <div className='login'>
      <h1>YOU NEED TO LOGIN BRO</h1>

      <img
        src='https://brand.linkedin.com/content/dam/brand/site/img/logo/logo-r.png'
        alt='linked-in logo'
      />

      <form action=''>
        <input
          type='text'
          placeholder='Full name (required for registration)'
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type='text'
          placeholder='Profile Pic Url (optional)'
          value={profilePicURL}
          onChange={(event) => setProfilePicURL(event.target.value)}
        />
        <input
          type='email'
          placeholder='Email'
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <button type='submit' onClick={loginToApp}>
          Sign In
        </button>
      </form>

      <p>
        Not a member?
        <span
          role='button'
          tabIndex={0}
          className='login__register'
          onClick={register}
          onKeyUp={() => console.log("cus")}
        >
          Register Now!
        </span>
      </p>
    </div>
  );
}

export default Login;
