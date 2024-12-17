import React from "react";
import { TodoListItem } from "./TodoListItem";
import { TodoContext } from "../../../context/TodoContext/TodoContext";
import { action } from "@storybook/addon-actions";

const mockTodo = {
  id: 1,
  text: "Test Todo",
  completed: false,
};

const TodoContextProvider = ({ children }) => (
  <TodoContext.Provider
    value={{
      toggleTodo: action("toggleTodo"),
      removeTodo: action("removeTodo"),
    }}
  >
    {children}
  </TodoContext.Provider>
);

const Template = (args) => (
  <TodoContextProvider>
    <TodoListItem {...args} />
  </TodoContextProvider>
);

export default {
  title: "Components/TodoListItem",
  component: TodoListItem,
  decorators: [
    (Story) => (
      <TodoContextProvider>
        <Story />
      </TodoContextProvider>
    ),
  ],
};

export const Default = Template.bind({});
Default.args = {
  item: mockTodo,
};
