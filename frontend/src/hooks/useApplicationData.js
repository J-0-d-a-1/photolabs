import { useEffect, useReducer } from "react";

export const ACTIONS = {
  TOGGLE_FAVORITE: "TOGGLE_FAVORITE",
  OPEN_MODAL: "OPEN_MODAL",
  CLOSE_MODAL: "CLOSE_MODAL",
};

export default function useApplicationData(photosData) {
  const initialState = {
    favoritePhotoIds: [],
    selectedPhoto: {},
    isModalOpen: false,
  };

  const toggleFavorite = (state, photoId) => {
    const isFavroite = state.favoritePhotoIds.includes(photoId);
    const updatedFavorites = isFavroite
      ? state.favoritePhotoIds.filter((id) => id !== photoId)
      : [...state.favoritePhotoIds, photoId];

    return { ...state, favoritePhotoIds: updatedFavorites };
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
      case ACTIONS.OPEN_MODAL:
        const photo = photosData.find(
          (photo) => photo.id === action.payload.photoId
        );
        return openModal(state, photo);
      case ACTIONS.CLOSE_MODAL:
        return closeModal(state);
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
