import "./Like.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { useState } from "react";
import { Button } from "@material-ui/core";
export default function App() {
  const [liked, setLiked] = useState(true);
  const toggle = () => {
    setLiked(!liked);
  };
  return (
    <div className="like">
      <Button onClick={toggle}>
        {liked ? (
          <FavoriteIcon fontSize="small" className="likeing" />
        ) : (
          <FavoriteBorderIcon fontSize="small" />
        )}
      </Button>
    </div>
  );
}
