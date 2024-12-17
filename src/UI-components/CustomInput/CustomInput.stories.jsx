import { CustomInput } from "./CustomInput";
import { useState } from "react";
import { action } from "@storybook/addon-actions";

export default {
  title: "UI/CustomInput",
  component: CustomInput,
};

const Template = (args) => {
  const [value, setValue] = useState("");

  return (
    <CustomInput
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
        args.onChange(e);
      }}
      {...args}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  value: "",
  placeholder: "Enter text",
  onChange: action("input-changed"),
};

export const WithCustomStyles = Template.bind({});
WithCustomStyles.args = {
  value: "",
  placeholder: "Enter styled input",
  style: { color: "orange" },
  onChange: action("input-changed"),
};
