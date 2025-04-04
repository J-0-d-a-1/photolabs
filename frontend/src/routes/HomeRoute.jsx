import PhotoList from "../components/PhotoList";
import TopNavigation from "../components/TopNavigationBar";

import "../styles/HomeRoute.scss";

const HomeRoute = ({
  photos,
  topics,
  toggleFavorite,
  favoritePhotoIds,
  handleClickModal,
}) => {
  return (
    <div className="home-route">
      <TopNavigation topics={topics} favoritePhotoIds={favoritePhotoIds} />
      <PhotoList
        photos={photos}
        toggleFavorite={toggleFavorite}
        favoritePhotoIds={favoritePhotoIds}
        handleClickModal={handleClickModal}
      />
    </div>
  );
};

export default HomeRoute;
