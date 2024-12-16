import { useTodo } from "../../context/TodoContext/TodoContext";
import { TodoListItem } from "./TodoListItem/TodoListItem";
import { AddTodo } from "./AddTodo/AddTodo";

import styles from "./todolist.module.scss";
import { Filters } from "./Filters/Filters";
import { useState } from "react";
import { CustomButton } from "../../UI-components/CustomButton/CustomButton";
import { useTheme } from "../../context/ThemeContext/ThemeContext";

const TodoList = () => {
  const { todos } = useTodo();
  const { toggleTheme, theme } = useTheme();
  const [filter, setFilter] = useState();

  const filteredTodos = todos.filter((todo) => {
    if (filter === "true") return todo.completed === true;
    if (filter === "false") return todo.completed === false;
    return true;
  });

  return (
    <div className={`${styles.wrapper} ${theme}`}>
      <CustomButton onClick={() => toggleTheme()} text={`${theme}`} />
      <AddTodo />
      <Filters setFilter={setFilter} activeFilter={filter} />
      <ul className={styles.list}>
        {filteredTodos?.length ? (
          filteredTodos.map((todo) => (
            <TodoListItem key={todo.id} item={todo} />
          ))
        ) : (
          <p style={{ margin: "0 auto" }}>You are haven't tasks</p>
        )}
      </ul>
    </div>
  );
};

export { TodoList };
