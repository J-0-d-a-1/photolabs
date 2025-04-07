import PhotoList from "../components/PhotoList";
import TopNavigation from "../components/TopNavigationBar";

import "../styles/HomeRoute.scss";

const HomeRoute = ({
  photos,
  topics,
  fetchPhotoByTopic,
  toggleFavorite,
  favoritePhotoIds,
  openModal,
}) => {
  return (
    <div className="home-route">
      <TopNavigation
        topics={topics}
        favoritePhotoIds={favoritePhotoIds}
        fetchPhotoByTopic={fetchPhotoByTopic}
      />
      <PhotoList
        photos={photos}
        toggleFavorite={toggleFavorite}
        favoritePhotoIds={favoritePhotoIds}
        openModal={openModal}
      />
    </div>
  );
};

export default HomeRoute;
