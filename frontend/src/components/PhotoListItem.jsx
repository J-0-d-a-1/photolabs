import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const { username, imageSource, id, location, profile } = props;

  return (
    <>
      <img src={imageSource} alt="photo" />
      <img src={profile} alt="uesr's photo" />
      <p>{username}</p>
      <p>
        {location.city}, {location.country}
      </p>
    </>
  );
};

export default PhotoListItem;
