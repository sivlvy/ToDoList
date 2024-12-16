import React, { useState } from "react";

import { useTodo } from "../../../context/TodoContext/TodoContext";
import { CustomButton } from "../../../UI-components/CustomButton/CustomButton";
import { CustomInput } from "../../../UI-components/CustomInput/CustomInput";

import styles from "./addTodo.module.scss";

const AddTodo = () => {
  const [value, setValue] = useState("");

  const { addTodo } = useTodo();

  const handleAddTodo = () => {
    if (value.trim()) {
      addTodo(value.trim());
      setValue("");
    }
  };
  return (
    <div className={styles.wrapper}>
      <CustomInput
        onChange={(e) => setValue(e.target.value)}
        value={value}
        placeholder="Type your task"
      />
      <CustomButton onClick={handleAddTodo} text="Add" type="add" />
    </div>
  );
};

export { AddTodo };
