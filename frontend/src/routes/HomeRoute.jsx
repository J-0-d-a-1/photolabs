import PhotoList from "../components/PhotoList";
import TopNavigation from "../components/TopNavigationBar";

import "../styles/HomeRoute.scss";

const HomeRoute = ({ photos, topics, toggleFavorite, favoritePhotoIds }) => {
  return (
    <div className="home-route">
      <TopNavigation topics={topics} />
      <PhotoList
        photos={photos}
        toggleFavorite={toggleFavorite}
        favoritePhotoIds={favoritePhotoIds}
      />
    </div>
  );
};

export default HomeRoute;
