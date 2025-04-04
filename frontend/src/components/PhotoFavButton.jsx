import { useState } from "react";

import "../styles/PhotoFavButton.scss";

import FavIcon from "./FavIcon";

const PhotoFavButton = ({ id, toggleFavorite, favoritePhotoIds }) => {
  const [selected, setSelected] = useState(false);

  const isLiked = () => {
    setSelected((prev) => !prev);
  };

  const handleClick = () => isLiked();

  return (
    <div onClick={handleClick} className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={selected} />
      </div>
    </div>
  );
};

export default PhotoFavButton;
