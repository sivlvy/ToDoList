import React, { useState } from "react";
import { CustomModal } from "./CustomModal";
import { action } from "@storybook/addon-actions";
import { CustomButton } from "../CustomButton/CustomButton";

// Створіть шаблон для історії
const Template = (args) => {
  const [openModal, setOpenModal] = useState(false);

  const handleCallback = () => {
    action("Callback triggered")(); // Фіксуємо виклик callback-функції
  };

  return (
    <div>
      <CustomButton onClick={() => setOpenModal(true)} text="Open modal" />
      <CustomModal
        {...args}
        openModal={openModal}
        setOpenModal={setOpenModal}
        callback={handleCallback}
      >
        <div>This is a custom modal content!</div>
      </CustomModal>
    </div>
  );
};

export default {
  title: "UI/CustomModal",
  component: CustomModal,
};

export const Default = Template.bind({});
Default.args = {
  sx: { width: "400px", height: "300px", backgroundColor: "lightgrey" },
};
