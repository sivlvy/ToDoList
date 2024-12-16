import React from "react";
import { useTheme } from "../../context/ThemeContext/ThemeContext";

const Container = ({ children }) => {
  const { theme } = useTheme();

  return (
    <div className={theme} style={{ margin: "0 auto", padding: "0 64px" }}>
      {children}
    </div>
  );
};

export { Container };
