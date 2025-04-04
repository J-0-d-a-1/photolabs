import PhotoFavButton from "./PhotoFavButton";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const {
    user: { username, profile },
    urls: { full },
    id,
    location,
  } = props.photo;
  const { toggleFavorite, favoritePhotoIds, modal, handleClickModal } = props;

  return (
    <div className="photo-list__item">
      <PhotoFavButton
        id={id}
        toggleFavorite={toggleFavorite}
        favoritePhotoIds={favoritePhotoIds}
      />
      <img
        onClick={handleClickModal}
        className="photo-list__image"
        src={full}
        alt="photo"
      />
      <div className="photo-list__user-details">
        <img
          className="photo-list__user-profile"
          src={profile}
          alt="uesr's photo"
        />
        <div className="photo-list__user-info">
          <p>{username}</p>
          <div className="photo-list__user-location">
            <p>
              {location.city}, {location.country}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
