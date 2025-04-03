import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const {
    user: { username, profile },
    urls: { full },
    id,
    location,
  } = props.photo;

  return (
    <div className="photo-list__item">
      <PhotoFavButton id={id} />
      <img className="photo-list__image" src={full} alt="photo" />
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
