import React from "react";
import "./login.scss";

function Login() {
  const register = () => {};
  const loginToApp = () => {};

  return (
    <div className='login'>
      <h1>YOU NEED TO LOGIN BRO</h1>

      <img
        src='https://brand.linkedin.com/content/dam/brand/site/img/logo/logo-r.png'
        alt='linked-in logo'
      />

      <form action=''>
        <input type='text' placeholder='Full name' />
        <input type='text' placeholder='Profile Pic Url (optional)' />
        <input type='email' placeholder='Email' />
        <input type='password' placeholder='Password' />

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
