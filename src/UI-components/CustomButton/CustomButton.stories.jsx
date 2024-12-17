import { CustomButton } from "./CustomButton";
import { action } from "@storybook/addon-actions";

export default {
  title: "UI/CustomButton",
  component: CustomButton,
};

const Template = (args) => <CustomButton {...args} />;

export const Default = Template.bind({});

Default.args = {
  text: "Press me",
  onClick: action("button-click"),
};

export const Add = Template.bind({});

Add.args = {
  text: "Add",
  type: "add",
  onClick: action("button-add-click"),
};

export const Remove = Template.bind({});

Remove.args = {
  text: "Remove",
  type: "remove",
  onClick: action("button-remove-click"),
};

export const Edit = Template.bind({});

Edit.args = {
  text: "Edit",
  type: "edit",
  onClick: action("button-edit-click"),
};
