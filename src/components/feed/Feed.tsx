import React, { useEffect, useState } from "react";
import "./feed.scss";

import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";

import InputOption from "./InputOption";
import Post from "./Post";

import { db, collection, doc, getDocs, setDoc } from "../../firebase";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const postsCol = collection(db, "posts");
      const postSnapshot = await getDocs(postsCol);
      const postsList = postSnapshot.docs.map((document) => ({
        id: document.id,
        data: document.data(),
      }));

      console.log(postsList);
    }

    getPosts();
  }, []);

  const sendPost = () => {
    (async function createData() {
      await setDoc(doc(db, "posts"), {
        name: "Test post",
      });
    })();
  };

  return (
    <div className='feed'>
      <div className='feed__input-container'>
        <div className='feed__input'>
          <CreateIcon />
          <form action=''>
            <input type='text' />
            <button type='submit' onClick={sendPost}>
              Send
            </button>
          </form>
        </div>
        <div className='feed__input-options'>
          <InputOption Icon={ImageIcon} title='Photo' color='#70B5F9' />
          <InputOption Icon={SubscriptionsIcon} title='Video' color='#E7A33E' />
          <InputOption Icon={EventNoteIcon} title='Event' color='#C0CBCD' />
          <InputOption
            Icon={CalendarViewDayIcon}
            title='Write Article'
            color='#7FC1SE'
          />
        </div>
      </div>

      {/* {posts.map((post) => (
        <Post />
      ))} */}

      <Post
        name='Jarda Kořínek'
        description='Description'
        message='Message goes here'
        photoUrl='photo url...'
      />
    </div>
  );
}

export default Feed;
