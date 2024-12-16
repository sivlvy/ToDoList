import React from "react";
import styles from "./custom-button.module.scss";
import clsx from "clsx";

const CustomButton = ({ text, onClick, type, children }) => {
  const buttonStyles = clsx(styles.btn, styles[`btn--${type}`]);

  return (
    <button className={buttonStyles} onClick={onClick}>
      <span className={styles.span}>{text}</span>
      {children}
    </button>
  );
};

export { CustomButton };
