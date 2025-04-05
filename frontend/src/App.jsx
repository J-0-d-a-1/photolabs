import useApplicationData from "./hooks/useApplicationData";

import HomeRoute from "./routes/HomeRoute";
import photos from "./mocks/photos";
import topics from "./mocks/topics";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";

import "./App.scss";

// Note: Rendering a single component to build components in isolation
const App = (props) => {
  const { state, toggleFavorite, handleClickModal } = useApplicationData(
    [],
    {},
    false,
    photos
  );

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        handleClickModal={handleClickModal}
        toggleFavorite={toggleFavorite}
        favoritePhotoIds={state.favoritePhotoIds}
      />
      {state.isModalOpen && (
        <PhotoDetailsModal
          selectedPhoto={state.selectedPhoto}
          toggleFavorite={toggleFavorite}
          favoritePhotoIds={state.favoritePhotoIds}
          handleClickModal={handleClickModal}
        />
      )}
    </div>
  );
};

export default App;
