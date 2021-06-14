import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "./firebase";

import firebase from 'firebase/app';
import { useCollectionData } from 'react-firebase-hooks/firestore';
const auth = firebase.auth();

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const { uid,email,displayName,photoURL } = auth.currentUser;
  const sendTweet = (e) => {
    e.preventDefault();
    const imgurl=(photoURL|| 'https://api.adorable.io/avatars/23/abott@adorable.png');
    db.collection("posts").add({
      displayName: displayName,
      username: email,
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:imgurl,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's on your mind?"
            type="text"
          />
        </div>
        <h3>please enter url only in the 👇below box</h3>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />

        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Send
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;