import { useState } from "react";

import HomeRoute from "./routes/HomeRoute";
import photos from "./mocks/photos";
import topics from "./mocks/topics";

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

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        toggleFavorite={toggleFavorite}
        favoritePhotoIds={favoritePhotoIds}
      />
    </div>
  );
};

export default App;
