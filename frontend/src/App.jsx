import useApplicationData, { ACTIONS } from "./hooks/useApplicationData";

import HomeRoute from "./routes/HomeRoute";
import photos from "./mocks/photos";
import topics from "./mocks/topics";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";

import "./App.scss";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const { state, dispatch } = useApplicationData(photos);

  const toggleFavorite = (photoId) => {
    dispatch({ type: ACTIONS.TOGGLE_FAVORITE, payload: { photoId } });
  };

  const openModal = (photoId) => {
    dispatch({ type: ACTIONS.OPEN_MODAL, payload: { photoId } });
  };

  const closeModal = () => dispatch({ type: ACTIONS.CLOSE_MODAL });

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        openModal={openModal}
        toggleFavorite={toggleFavorite}
        favoritePhotoIds={state.favoritePhotoIds}
      />
      {state.isModalOpen && (
        <PhotoDetailsModal
          selectedPhoto={state.selectedPhoto}
          toggleFavorite={toggleFavorite}
          favoritePhotoIds={state.favoritePhotoIds}
          openModal={openModal}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default App;
