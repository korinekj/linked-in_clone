import React, { useEffect, useState } from "react";
import "./feed.scss";

import {
  collection,
  addDoc,
  onSnapshot,
  DocumentData,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";

import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";

import InputOption from "./InputOption";
import Post from "./Post";

import { db } from "../../firebase";

// type Posts = { id: string; data: DocumentData }[] | undefined;
interface Posts {
  id: string;
  data: DocumentData;
}

function Feed() {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState<Posts[] | undefined>();

  useEffect(() => {
    const postsCol = collection(db, "posts");

    const q = query(postsCol, orderBy("timeStamp", "desc"));

    onSnapshot(q, (snapshot) => {
      setPosts(
        snapshot.docs.map((document) => ({
          id: document.id,
          data: document.data(),
        }))
      );
    });
  }, []);

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    // Add a new document in collection "posts" -> using addDoc, dont need to add ID, it will be generated automatically
    await addDoc(collection(db, "posts"), {
      name: "Jarda Kořínek",
      description: "Description",
      message: input,
      photoUrl: "photo url...",
      timeStamp: serverTimestamp(),
    });

    setInput("");
  };

  return (
    <div className='feed'>
      <div className='feed__input-container'>
        <div className='feed__input'>
          <CreateIcon />
          <form action=''>
            <input
              type='text'
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />
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

      {/* optional chaining -> posts je possibly undefined a to vyhodí TS error */}
      {posts?.map((post) => {
        console.log(post);

        return (
          <Post
            key={post.id}
            name='Jarda Kořínek'
            description='ha'
            message={post.data.message}
            photoUrl='photo url...'
          />
        );
      })}
    </div>
  );
}

export default Feed;
