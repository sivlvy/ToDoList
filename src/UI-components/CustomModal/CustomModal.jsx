import styles from "./custom-modal.module.scss";
import PropTypes from "prop-types";

const CustomModal = ({ sx, children, openModal, setOpenModal, callback }) => {
  const handleCloseModal = () => {
    setOpenModal(false);
    if (callback) {
      callback();
    }
  };

  if (!openModal) return null;

  return (
    <div className={styles.modalBackdrop} onClick={handleCloseModal}>
      <div
        className={styles.modalContent}
        style={sx}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.closeButton} onClick={handleCloseModal}>
          &#x2715;
        </div>
        {children}
      </div>
    </div>
  );
};

export { CustomModal };

CustomModal.propTypes = {
  children: PropTypes.node,
  openModal: PropTypes.func,
  sx: PropTypes.object,
  setOpenModal: PropTypes.func,
};
