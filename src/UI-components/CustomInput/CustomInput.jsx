import React from "react";
import styles from "./custom-input.module.scss";

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
