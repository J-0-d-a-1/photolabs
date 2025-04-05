import { useState } from "react";

export default function useApplicationData(photosData) {
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

  const [selectedPhoto, setSelectedPhoto] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
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
