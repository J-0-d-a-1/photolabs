import { useReducer } from "react";

export const ACTIONS = {
  TOGGLE_FAVORITE: "TOGGLE_FAVORITE",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  OPEN_MODAL: "OPEN_MODAL",
  CLOSE_MODAL: "CLOSE_MODAL",
  GET_PHOTOS_BY_TOPICS: "GET_PHOTOS_BY_TOPICS",
  GET_FAVORITE_PHOTOS: "GET_FAVORITE_PHOTOS",
};

export default function useApplicationData() {
  const initialState = {
    favoritePhotoIds: [],
    selectedPhoto: {},
    isModalOpen: false,
    isFavoriteOpen: false,
    photoData: [],
    topicData: [],
  };

  const toggleFavorite = (state, photoId) => {
    const isFavroite = state.favoritePhotoIds.includes(photoId);
    const updatedFavorites = isFavroite
      ? state.favoritePhotoIds.filter((id) => id !== photoId)
      : [...state.favoritePhotoIds, photoId];

    return { ...state, favoritePhotoIds: updatedFavorites };
  };

  const showFavoritesPhotoList = (state, favPhotoIds) => {
    const updatedFavoritePhotoList =
      !state.isFavoriteOpen && state.favoritePhotoIds.length > 0
        ? state.photoData.filter((photo) => favPhotoIds.includes(photo.id))
        : state.photoData;

    const updatedIsFavoriteOpen = !state.isFavoriteOpen;

    return {
      ...state,
      isFavoriteOpen: updatedIsFavoriteOpen,
      photoData: updatedFavoritePhotoList,
    };
  };

  const openModal = (state, photo) => {
    return { ...state, selectedPhoto: photo, isModalOpen: true };
  };

  const closeModal = (state) => {
    return { ...state, selectedPhoto: {}, isModalOpen: false };
  };

  function reducer(state, action) {
    switch (action.type) {
      case ACTIONS.TOGGLE_FAVORITE:
        return toggleFavorite(state, action.payload.photoId);
      case ACTIONS.SET_PHOTO_DATA:
        return { ...state, photoData: action.payload };
      case ACTIONS.SET_TOPIC_DATA:
        return { ...state, topicData: action.payload };
      case ACTIONS.OPEN_MODAL:
        const photo = state.photoData.find(
          (photo) => photo.id === action.payload.photoId
        );
        return openModal(state, photo);
      case ACTIONS.CLOSE_MODAL:
        return closeModal(state);
      case ACTIONS.GET_PHOTOS_BY_TOPICS:
        return { ...state, photoData: action.payload };
      case ACTIONS.GET_FAVORITE_PHOTOS:
        return showFavoritesPhotoList(state, action.payload.favoritePhotoIds);
      default:
        throw new Error(
          `Tried to reduce with unsupported action type: ${action.type}`
        );
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return {
    state,
    dispatch,
  };
}
