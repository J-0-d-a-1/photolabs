import PhotoListItem from "./PhotoListItem";

import "../styles/PhotoList.scss";

const PhotoList = ({ photos, toggleFavorite, favoritePhotoIds }) => {
  const photosList = photos.map((photo) => {
    return (
      <PhotoListItem
        key={photo.id}
        photo={photo}
        toggleFavorite={toggleFavorite}
        favoritePhotoIds={favoritePhotoIds}
      />
    );
  });

  return <ul className="photo-list">{photosList}</ul>;
};

export default PhotoList;
