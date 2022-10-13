import React from "react";
import "./feed.scss";

import CreateIcon from "@mui/icons-material/Create";

function Feed() {
  return (
    <div className='feed'>
      <div className='feed__inputContainer'>
        <div className='feed__input'>
          <CreateIcon />
          <form action=''>
            <input type='text' />
            <button type='submit'>Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Feed;
