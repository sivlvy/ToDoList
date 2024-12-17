import React, { useState } from "react";
import { TodoList } from "./TodoList";
import { TodoContext } from "../../context/TodoContext/TodoContext";
import { action } from "@storybook/addon-actions";
import { ThemeContext } from "../../context/ThemeContext/ThemeContext";

const mockTodoContext = {
  todos: [
    { id: 1, text: "Task 1", completed: false },
    { id: 2, text: "Task 2", completed: true },
    { id: 3, text: "Task 3", completed: false },
  ],
};

const mockThemeContext = {
  theme: "light", // можна змінювати на "dark"
  toggleTheme: action("theme-toggled"),
};

const TodoListWithMocks = () => {
  const [filter, setFilter] = useState("");

  return (
    <TodoContext.Provider value={mockTodoContext}>
      <ThemeContext.Provider value={mockThemeContext}>
        <TodoList />
      </ThemeContext.Provider>
    </TodoContext.Provider>
  );
};

export default {
  title: "Components/TodoList",
  component: TodoList,
};

const Template = (args) => <TodoListWithMocks {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const WithCompletedTasks = Template.bind({});
WithCompletedTasks.args = {
  filter: "true",
};

export const WithPendingTasks = Template.bind({});
WithPendingTasks.args = {
  filter: "false",
};

export const ChangeThemeButton = Template.bind({});
ChangeThemeButton.args = {
  onClick: action("theme-changed"),
};
