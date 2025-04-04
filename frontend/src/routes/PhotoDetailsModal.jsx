import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";

const PhotoDetailsModal = (props) => {
  const { photos, isModalOpen, handleClickModal } = props;

  const id = event.target.id;
  const photo = photos[id];
  console.log(photo);

  return (
    <div className="photo-details-modal">
      <button
        onClick={handleClickModal}
        className="photo-details-modal__close-button"
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>
    </div>
  );
};

export default PhotoDetailsModal;
