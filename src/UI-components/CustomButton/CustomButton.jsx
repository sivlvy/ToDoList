import React from "react";
import styles from "./custom-button.module.scss";
import clsx from "clsx";

import PropTypes from "prop-types";

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

CustomButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["add", "edit", "remove"]),
  children: PropTypes.node,
};
