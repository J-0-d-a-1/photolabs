import FavBadge from "./FavBadge";
import TopicList from "./TopicList";

import "../styles/TopNavigationBar.scss";

const TopNavigation = ({ topics, favoritePhotoIds, fetchPhotoByTopic }) => {
  const isFavPhotoExist = favoritePhotoIds.length > 0;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} fetchPhotoByTopic={fetchPhotoByTopic} />
      <FavBadge isFavPhotoExist={isFavPhotoExist} />
    </div>
  );
};

export default TopNavigation;
