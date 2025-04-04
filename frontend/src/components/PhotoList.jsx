import PhotoListItem from "./PhotoListItem";

import "../styles/PhotoList.scss";

const PhotoList = ({
  photos,
  toggleFavorite,
  favoritePhotoIds,
  modal,
  handleClickModal,
}) => {
  const photosList = photos.map((photo) => {
    return (
      <PhotoListItem
        key={photo.id}
        photo={photo}
        toggleFavorite={toggleFavorite}
        favoritePhotoIds={favoritePhotoIds}
        modal={modal}
        handleClickModal={handleClickModal}
      />
    );
  });

  return <ul className="photo-list">{photosList}</ul>;
};

export default PhotoList;
