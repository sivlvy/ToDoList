import React, { useState } from "react";
import { AddTodo } from "./AddTodo";
import { action } from "@storybook/addon-actions";
import { TodoProvider } from "../../../context/TodoContext/TodoContext";

const useTodoMock = () => {
  return {
    addTodo: action("addTodo"),
  };
};

const AddTodoTemplate = (args) => {
  const [value, setValue] = useState("");

  const { addTodo } = useTodoMock();

  const handleAddTodo = () => {
    if (value.trim()) {
      addTodo(value.trim());
      setValue("");
    }
  };

  return (
    <TodoProvider>
      <AddTodo
        {...args}
        value={value}
        setValue={setValue}
        handleAddTodo={handleAddTodo}
      />
    </TodoProvider>
  );
};

export default {
  title: "Components/AddTodo",
  component: AddTodo,
  argTypes: {
    addTodo: { action: "addTodo" },
  },
};

export const Default = AddTodoTemplate.bind({});
Default.args = {
  value: "",
  setValue: action("setValue"),
};
