import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const {
    user: { username, profile },
    urls: { full },
    id,
    location,
  } = props.photo;

  return (
    <div>
      <img src={full} alt="photo" />
      <img src={profile} alt="uesr's photo" />
      <p>{username}</p>
      <p>
        {location.city}, {location.country}
      </p>
    </div>
  );
};

export default PhotoListItem;
