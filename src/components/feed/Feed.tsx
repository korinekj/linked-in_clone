import React, { useEffect, useState } from "react";
import "./feed.scss";

import {
  collection,
  // addDoc,
  onSnapshot,
  setDoc,
  doc,
} from "firebase/firestore";

import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";

import InputOption from "./InputOption";
import Post from "./Post";

import { db } from "../../firebase";

function Feed() {
  const [posts, setPosts] = useState<{}[]>([{}]);

  useEffect(() => {
    const postsCol = collection(db, "posts");

    onSnapshot(postsCol, (snapshot) => {
      setPosts(
        snapshot.docs.map((document) => ({
          id: document.id,
          data: document.data(),
        }))
      );
    });
  }, []);

  console.log(posts);

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    // Add a new document in collection "cities"
    await setDoc(doc(db, "posts", "testtttt"), {
      firstName: "ssss",
      sureName: "Kořínek",
      state: "Czech Republic",
      status: "BŮH",
    });
  };

  return (
    <div className='feed'>
      <div className='feed__input-container'>
        <div className='feed__input'>
          <CreateIcon />
          <form action=''>
            <input type='text' />
            <button type='submit' onClick={handleSubmit}>
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
