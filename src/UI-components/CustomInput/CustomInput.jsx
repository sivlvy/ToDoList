import React from "react";
import styles from "./custom-input.module.scss";
import PropTypes from "prop-types";

const CustomInput = ({ value, onChange, placeholder, style, ...props }) => {
  return (
    <div className={styles.fieldWrapper}>
      <input
        className={styles.input}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={style}
        {...props}
      />
    </div>
  );
};

export { CustomInput };

CustomInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  style: PropTypes.object,
};
