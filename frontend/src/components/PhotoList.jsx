import PhotoListItem from "./PhotoListItem";

import "../styles/PhotoList.scss";

const PhotoList = ({ photos }) => {
  const photosList = photos.map((photo) => {
    return <PhotoListItem key={photo.id} photo={photo} />;
  });

  return <ul className="photo-list">{photosList}</ul>;
};

export default PhotoList;
