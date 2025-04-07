import PhotoListItem from "./PhotoListItem";

import "../styles/PhotoList.scss";

const PhotoList = ({ photos, toggleFavorite, favoritePhotoIds, openModal }) => {
  const photosList = photos.map((photo) => {
    return (
      <PhotoListItem
        key={photo.id}
        photo={photo}
        toggleFavorite={toggleFavorite}
        favoritePhotoIds={favoritePhotoIds}
        openModal={openModal}
      />
    );
  });

  return <ul className="photo-list">{photosList}</ul>;
};

export default PhotoList;
