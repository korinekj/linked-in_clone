import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

import "./App.scss";

import Login from "./components/login/Login";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Feed from "./components/feed/Feed";

function App() {
  const user = useSelector(selectUser);

  console.log(user);

  return (
    <div className='app'>
      <Header />

      {!user ? (
        <Login />
      ) : (
        <div className='app__body'>
          <Sidebar />
          <Feed />
          <Sidebar />
          {/* Widgets (right side) */}
        </div>
      )}
    </div>
  );
}

export default App;
