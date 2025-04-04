import "../styles/PhotoFavButton.scss";

import FavIcon from "./FavIcon";

const PhotoFavButton = ({ id, toggleFavorite, favoritePhotoIds }) => {
  const handleClick = () => {
    toggleFavorite(id);
  };

  return (
    <div onClick={handleClick} className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={favoritePhotoIds.includes(id) ? true : false} />
      </div>
    </div>
  );
};

export default PhotoFavButton;
