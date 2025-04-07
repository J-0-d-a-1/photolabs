import { useEffect } from "react";
import useApplicationData, { ACTIONS } from "./hooks/useApplicationData";

import HomeRoute from "./routes/HomeRoute";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";

import "./App.scss";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const { state, dispatch } = useApplicationData();

  useEffect(() => {
    fetch("/api/photos")
      .then((res) => res.json())
      .then((data) =>
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data })
      );
  }, []);

  useEffect(() => {
    fetch("/api/topics")
      .then((res) => res.json())
      .then((data) =>
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data })
      );
  }, []);

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
        photos={state.photoData}
        topics={state.topicData}
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
