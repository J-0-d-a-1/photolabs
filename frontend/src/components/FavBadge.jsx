import { useState } from "react";

import FavIcon from "./FavIcon";

import "../styles/FavBadge.scss";

const FavBadge = ({
  isFavPhotoExist,
  favoritePhotoIds,
  getFavoritesPhotoList,
}) => {
  const [isOpenFavPhotos, setIsOpenFavPhotos] = useState(true);

  const handleClick = () => {
    if (isOpenFavPhotos) {
      getFavoritesPhotoList(favoritePhotoIds);
    } else {
      setIsOpenFavPhotos((prev) => !prev);
    }
  };

  return (
    <div className="fav-badge" onClick={handleClick}>
      <FavIcon selected={true} displayAlert={!!isFavPhotoExist} />
    </div>
  );
};

export default FavBadge;
