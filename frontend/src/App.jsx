import { useState } from "react";

import HomeRoute from "./routes/HomeRoute";
import photos from "./mocks/photos";
import topics from "./mocks/topics";

import "./App.scss";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";

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

  const [modal, setModal] = useState("close");
  const toggleModal = () => {
    modal === "close" ? setModal("open") : setModal("close");
  };
  const handleClickModal = () => toggleModal();

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        modal={modal}
        handleClickModal={handleClickModal}
        toggleFavorite={toggleFavorite}
        favoritePhotoIds={favoritePhotoIds}
      />
      {modal === "open" && (
        <PhotoDetailsModal modal={modal} handleClickModal={handleClickModal} />
      )}
    </div>
  );
};

export default App;
