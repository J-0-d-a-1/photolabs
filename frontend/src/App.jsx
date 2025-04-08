import { useEffect } from "react";
import useApplicationData, { ACTIONS } from "./hooks/useApplicationData";

import HomeRoute from "./routes/HomeRoute";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";

import "./App.scss";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const { state, dispatch } = useApplicationData();

  const fetchAndDispatch = (url, actionTypes) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => dispatch({ type: actionTypes, payload: data }))
      .catch((err) => console.error(`Error fetching ${url}`, err));
  };

  // fetching photo and topic data from api
  useEffect(() => {
    fetchAndDispatch("/api/photos", ACTIONS.SET_PHOTO_DATA);
    fetchAndDispatch("/api/topics", ACTIONS.SET_TOPIC_DATA);
  }, []);

  // fetching selected topic
  const fetchPhotoByTopic = (topicId) => {
    const url = `/api/topics/${topicId}/photos`;
    fetchAndDispatch(url, ACTIONS.GET_PHOTOS_BY_TOPICS);
  };

  const toggleFavorite = (photoId) => {
    dispatch({ type: ACTIONS.TOGGLE_FAVORITE, payload: { photoId } });
  };

  const handleFavoriteClick = (favoritePhotoIds) => {
    dispatch({
      type: ACTIONS.GET_FAVORITE_PHOTOS,
      payload: { favoritePhotoIds },
    });
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
        fetchPhotoByTopic={fetchPhotoByTopic}
        openModal={openModal}
        toggleFavorite={toggleFavorite}
        favoritePhotoIds={state.favoritePhotoIds}
        favoritePhotoList={state.favoritePhotoList}
        getFavoritesPhotoList={handleFavoriteClick}
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
