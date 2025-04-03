import { useState } from "react";

import "../styles/PhotoFavButton.scss";

import FavIcon from "./FavIcon";

const PhotoFavButton = () => {
  const [selected, setSelected] = useState(false);

  const handleClick = () => setSelected(!selected);

  return (
    <div onClick={handleClick} className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={selected} />
      </div>
    </div>
  );
};

export default PhotoFavButton;
