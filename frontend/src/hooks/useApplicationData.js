import { useState } from "react";

export default function useApplicationData(
  initialFavoritePhotoIds,
  initailSelectedPhotoObject,
  initialIsModalOpen,
  photosData
) {
  const [favoritePhotoIds, setFavoritePhotoIds] = useState(
    initialFavoritePhotoIds
  );
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

  const [selectedPhoto, setSelectedPhoto] = useState(
    initailSelectedPhotoObject
  );
  const [isModalOpen, setIsModalOpen] = useState(initialIsModalOpen);
  const toggleModalOpen = () => {
    const index = event.target.id - 1;
    if (!isModalOpen) {
      setIsModalOpen(true);
      setSelectedPhoto(photosData[index]);
    } else {
      setIsModalOpen(false);
      setSelectedPhoto({});
    }
  };
  const handleClickModal = () => toggleModalOpen();

  return {
    state: { favoritePhotoIds, selectedPhoto, isModalOpen },
    toggleFavorite,
    handleClickModal,
  };
}
