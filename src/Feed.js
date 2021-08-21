import React,{useState,useEffect} from 'react'
import "./Feed.css";
import firebase from 'firebase/app';
import TweetBox from "./TweetBox";
import Post from "./Post.js"
import db from "./firebase"
import FlipMove from "react-flip-move";
import { useCollectionData } from 'react-firebase-hooks/firestore';


const firestore = firebase.firestore();


function Feed() {
    // const [posts,setPost]=useState([]);
    const postsRef = firestore.collection('posts');
    const query = postsRef.orderBy('createdAt', "desc");
    const [postss] = useCollectionData(query, { idField: 'id' });
    console.log(postss)

    // useEffect(()=>{
    //     db.collection('posts').onSnapshot(snapshot=>(
    //         setPost(snapshot.docs.map(doc=>doc.data()))
    //     ))
    // },[]);
    return (
        <div className="feed">            
            {/* Header */}

            {/* <div className="feed_header">
            <h1>Home</h1>
            </div> */}

            {/* TweetBox */}
            <TweetBox />
            {/* Post */}

            <FlipMove>
        {postss&&postss.map((post) => (          
          <Post
            key={post.text}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
            like={post.id}
          />
          // console.log(post)
        ))}
      </FlipMove>
      {/* {postss&&postss.map((post) =>(console.log(post)))} */}
            </div>        
    )
}

export default Feed
