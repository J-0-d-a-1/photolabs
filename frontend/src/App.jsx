import { useState } from "react";

import HomeRoute from "./routes/HomeRoute";
import photos from "./mocks/photos";
import topics from "./mocks/topics";

import "./App.scss";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [favoritePhotoIds, setFavoritePhotoIds] = useState([]);

  const toggleFavorite = (photoId) => {
    setFavoritePhotoIds((prev) => {
      if (prev.includes(photoId)) {
        prev.filter((id) => id !== photoId);
      } else {
        [...prev, photoId];
      }
    });
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
