import React from "react";
import "./App.scss";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Feed from "./components/feed/Feed";

function App() {
  return (
    <div className='app'>
      <Header />

      <div className='app__body'>
        <Sidebar />
        <Feed />
        <Sidebar />
        {/* Widgets (right side) */}
      </div>
    </div>
  );
}

export default App;
