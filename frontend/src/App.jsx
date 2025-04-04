import { useState } from "react";

import HomeRoute from "./routes/HomeRoute";
import photos from "./mocks/photos";
import topics from "./mocks/topics";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";

import "./App.scss";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [favoritePhotoIds, setFavoritePhotoIds] = useState([]);
  const toggleFavorite = (photoId) => {
    if (favoritePhotoIds.includes(photoId)) {
      const updatedFarvoritePhotoIds = favoritePhotoIds.filter(
        (id) => id !== photoId
      );
      setFavoritePhotoIds(updatedFarvoritePhotoIds);
    } else {
      const updatedFarvoritePhotoIds = [...favoritePhotoIds, photoId];
      setFavoritePhotoIds(updatedFarvoritePhotoIds);
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModalOpen = () => {
    !isModalOpen ? setIsModalOpen(true) : setIsModalOpen(false);
  };
  const handleClickModal = () => toggleModalOpen();

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        isModalOpen={isModalOpen}
        handleClickModal={handleClickModal}
        toggleFavorite={toggleFavorite}
        favoritePhotoIds={favoritePhotoIds}
      />
      {isModalOpen && (
        <PhotoDetailsModal
          photos={photos}
          isModalOpen={isModalOpen}
          handleClickModal={handleClickModal}
        />
      )}
    </div>
  );
};

export default App;
