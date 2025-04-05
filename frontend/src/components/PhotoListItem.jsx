import PhotoFavButton from "./PhotoFavButton";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const {
    user: { username, profile },
    urls: { full },
    id,
    location,
  } = props.photo;
  const { toggleFavorite, favoritePhotoIds, handleClickModal } = props;

  return (
    <div className="photo-list__item">
      <PhotoFavButton
        id={id}
        toggleFavorite={toggleFavorite}
        favoritePhotoIds={favoritePhotoIds}
      />
      <img
        id={id}
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
          <article>{username}</article>
          <div className="photo-list__user-location">
            <article>
              {location.city}, {location.country}
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
