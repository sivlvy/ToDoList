import React, { useState } from "react";
import { useTodo } from "../../../../context/TodoContext/TodoContext";
import { CustomButton } from "../../../../UI-components/CustomButton/CustomButton";
import { CustomInput } from "../../../../UI-components/CustomInput/CustomInput";

const EditPopUp = ({ item, setIsModalOpen }) => {
  const [value, setValue] = useState("");

  const { editTodo } = useTodo();

  const handleEditTodo = () => {
    editTodo(item.id, value);
    setValue("");
    setIsModalOpen(false);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "15px",
      }}
    >
      <CustomInput
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Edit"
      />
      <CustomButton type="edit" text="Edit" onClick={handleEditTodo} />
    </div>
  );
};

export { EditPopUp };
