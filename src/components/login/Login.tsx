import React, { useState } from "react";
import "./login.scss";

import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";

import {
  auth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "../../firebase";

function Login() {
  const [name, setName] = useState<string>("");
  const [profilePicURL, setProfilePicURL] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const dispatch = useDispatch();

  // Register new account with email and password
  const register = () => {
    if (!name) {
      alert("Please enter your full name");
    }

    console.log(name, profilePicURL);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed In
        console.log(userCredential);
        const { user } = userCredential;
        updateProfile(user, {
          displayName: name,
          photoURL: profilePicURL,
        })
          .then(() => {
            // Profile Updated
            console.log("updated");
            dispatch(
              login({
                email: userCredential.user.email,
                uid: userCredential.user.uid,
                displayName: userCredential.user.displayName,
                photoUrl: userCredential.user.photoURL,
              })
            );
          })
          .catch((error) => {
            // An error occurred
            console.log(error);
          });

        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorCode);
        console.log(errorMessage);

        if (errorCode === "auth/email-already-in-use") {
          alert("This email already exists");
        } else if (errorCode === "auth/weak-password") {
          alert("Password should be at least 6 characters");
        }
      });
  };

  // Login to App with email and password
  const loginToApp = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        console.log(userCredential);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorCode);
        console.log(errorMessage);
      });
  };

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
          onKeyUp={() => console.log("register onKeyUp")}
        >
          Register Now!
        </span>
      </p>
    </div>
  );
}

export default Login;
