import "./Like.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import { useState } from "react";
// import { useCollectionData } from 'react-firebase-hooks/firestore';
import { Button } from "@material-ui/core";
import db from "../firebase";
import firebase from 'firebase/app';
const auth = firebase.auth();
const firestore = firebase.firestore();
export default function Like({id}) {
  console.log(id);
  const postsRef = firestore.collection('posts');
  const [liked, setLiked] = useState(true);
  const [lcnt,setLcnt]=useState(0); 
  const [dislikeCount,setDislikecount]=useState(0); 
  postsRef.doc(id).get().then((doc)=>{
    // console.log(doc.data().like);
    setLiked(doc.data().like); 
    setLcnt(doc.data().count);
    setDislikecount(doc.data().discount);
  })
  const liking = () => {
    // db.collection("posts").doc(id).update({like:!liked});
    
        // db.collection("posts").doc(id).update({count:lcnt+1});}
        db.collection("posts").doc(id).update({count:lcnt+1});
        setLcnt(lcnt+1);      
        setLiked(!liked);
        // liked=!liked;
      };
      const disliking=()=>{
        db.collection("posts").doc(id).update({discount:dislikeCount+1});
        setDislikecount(dislikeCount+1);

  };
  return (
    <div >
      <Button onClick={liking} className="my-div">
        
          <ThumbUpIcon fontSize="small" />
      </Button> {lcnt}
       <Button onClick={disliking} className="my-div">
          <ThumbDownIcon fontSize="small" />
      </Button>
          {dislikeCount}
    </div>
  );
}
