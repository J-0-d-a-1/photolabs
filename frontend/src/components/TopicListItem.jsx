import "../styles/TopicListItem.scss";

const TopicListItem = ({ title, id, fetchPhotoByTopic }) => {
  const handleClickFetchPhotos = () => {
    fetchPhotoByTopic(id);
  };

  return (
    <div className="topic-list__item" onClick={handleClickFetchPhotos}>
      <span>{title}</span>
    </div>
  );
};

export default TopicListItem;
