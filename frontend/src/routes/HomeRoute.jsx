import PhotoList from "../components/PhotoList";
import TopNavigation from "../components/TopNavigationBar";

import "../styles/HomeRoute.scss";

const HomeRoute = ({
  photos,
  topics,
  fetchPhotoByTopic,
  toggleFavorite,
  favoritePhotoIds,
  favoritePhotoList,
  openModal,
  getFavoritesPhotoList,
}) => {
  const photosToDisplay = favoritePhotoList?.length
    ? favoritePhotoList
    : photos;

  return (
    <div className="home-route">
      <TopNavigation
        topics={topics}
        favoritePhotoIds={favoritePhotoIds}
        fetchPhotoByTopic={fetchPhotoByTopic}
        getFavoritesPhotoList={getFavoritesPhotoList}
      />
      <PhotoList
        photos={photosToDisplay}
        toggleFavorite={toggleFavorite}
        favoritePhotoIds={favoritePhotoIds}
        openModal={openModal}
      />
    </div>
  );
};

export default HomeRoute;
