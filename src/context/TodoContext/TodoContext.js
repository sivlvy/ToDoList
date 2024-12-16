import React, { createContext, useContext, useEffect, useState } from "react";

const LOCALSTORAGE_KEY = "todos-key";

export const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) ?? [],
  );

  useEffect(() => {
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    setTodos((prevState) => [
      ...prevState,
      { id: Date.now(), text, completed: false },
    ]);
  };

  const removeTodo = (id) => {
    setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos((prevState) =>
      prevState.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo,
      ),
    );
  };

  const toggleTodo = (id) => {
    setTodos((prevState) =>
      prevState.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, removeTodo, toggleTodo, editTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};

const useTodo = () => useContext(TodoContext);

export { TodoProvider, useTodo };
