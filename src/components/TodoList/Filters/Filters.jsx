import React from "react";
import { CustomButton } from "../../../UI-components/CustomButton/CustomButton";
import PropTypes from "prop-types";

const Filters = ({ setFilter, activeFilter }) => {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <p>Filter by:</p>
      <CustomButton
        onClick={() => setFilter("true")}
        text="Completed"
        type={activeFilter === "true" ? "true" : ""}
      />
      <CustomButton
        onClick={() => setFilter("false")}
        text="Not completed"
        type={activeFilter === "false" ? "true" : ""}
      />
      <CustomButton
        onClick={() => setFilter("all")}
        text="All"
        type={activeFilter === "all" ? "true" : ""}
      />
    </div>
  );
};

export { Filters };

Filters.propTypes = {
  setFilter: PropTypes.func.isRequired,
  activeFilter: PropTypes.string.isRequired,
};
