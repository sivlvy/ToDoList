import { EditPopUp } from "./EditPopUp";
import { useState } from "react";
import { TodoProvider } from "../../../../context/TodoContext/TodoContext";
import { action } from "@storybook/addon-actions";

export default {
  title: "Components/EditPopUp",
  component: EditPopUp,
};

const Template = (args) => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <TodoProvider>
      {isModalOpen && <EditPopUp {...args} setIsModalOpen={setIsModalOpen} />}
    </TodoProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  item: { id: 1, text: "Sample todo" },
  setIsModalOpen: action("setIsModalOpen"),
  editTodo: action("editTodo"),
};
