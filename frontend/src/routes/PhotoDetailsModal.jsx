import closeSymbol from "../assets/closeSymbol.svg";
import PhotoFavButton from "../components/PhotoFavButton";
import PhotoList from "../components/PhotoList";

import "../styles/PhotoDetailsModal.scss";

const PhotoDetailsModal = (props) => {
  const {
    selectedPhoto,
    openModal,
    closeModal,
    toggleFavorite,
    favoritePhotoIds,
  } = props;

  const { id, location, urls, user, similar_photos } = selectedPhoto;

  console.log(selectedPhoto);

  return (
    <div className="photo-details-modal">
      <button
        onClick={() => closeModal()}
        className="photo-details-modal__close-button"
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <section className="photo-details-modal__images ">
        <PhotoFavButton
          id={id}
          toggleFavorite={toggleFavorite}
          favoritePhotoIds={favoritePhotoIds}
        />
        <img
          className="photo-details-modsl__image"
          src={urls.regular}
          alt="Selected Photo"
        />
        <div className="photo-details-modal__photographer-details">
          <img
            className="photo-details-modal__photographer-profile"
            src={user.profile}
            alt="{user.username}'s photo"
          />
          <div className="photo-details-modal__photographer-info">
            <article>{user.username}</article>
            <div className="photo-details-modal__photographer-location">
              <article>
                {location.city}, {location.country}
              </article>
            </div>
          </div>
        </div>
      </section>
      <section>
        <header className="photo-details-modal__header">
          <p className="photo-details-modal__header">Similar Photos</p>
        </header>
        <PhotoList
          photos={Object.values(similar_photos)}
          toggleFavorite={toggleFavorite}
          favoritePhotoIds={favoritePhotoIds}
          openModal={openModal}
        />
      </section>
    </div>
  );
};

export default PhotoDetailsModal;
