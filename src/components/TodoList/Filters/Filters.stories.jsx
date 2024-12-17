import React, { useState } from "react";
import { Filters } from "./Filters";
import { action } from "@storybook/addon-actions";

const FiltersTemplate = (args) => {
  const [activeFilter, setActiveFilter] = useState("all");

  const setFilter = (filter) => {
    setActiveFilter(filter);
    args.setFilter(filter);
  };

  return (
    <Filters {...args} setFilter={setFilter} activeFilter={activeFilter} />
  );
};

export default {
  title: "Components/Filters",
  component: Filters,
  argTypes: {
    setFilter: { action: "setFilter" },
    activeFilter: {
      control: "select",
      options: ["true", "false", "all"],
    },
  },
};

export const Default = FiltersTemplate.bind({});
Default.args = {
  setFilter: action("setFilter"),
  activeFilter: "all",
};
