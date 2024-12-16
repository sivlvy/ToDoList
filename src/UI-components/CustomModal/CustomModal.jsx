import styles from "./custom-modal.module.scss";

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
