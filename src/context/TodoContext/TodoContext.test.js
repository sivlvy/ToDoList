import "@testing-library/jest-dom";

import { TodoProvider, useTodo } from "./TodoContext";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

describe("TodoProvider", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("should render", () => {
    const TestComponent = () => {
      const { todos } = useTodo();

      return <div>{todos.length}</div>;
    };

    localStorage.setItem(
      "todos-key",
      JSON.stringify([{ id: 1, text: "Test todo", completed: false }]),
    );

    render(
      <TodoProvider>
        <TestComponent />
      </TodoProvider>,
    );

    expect(screen.getByText("1")).toBeInTheDocument();
  });

  it("should add todo", () => {
    const TestComponent = () => {
      const { todos, addTodo } = useTodo();
      return (
        <div>
          {todos.length}
          <button onClick={() => addTodo("New todo")}>Add</button>
        </div>
      );
    };

    render(
      <TodoProvider>
        <TestComponent />
      </TodoProvider>,
    );

    expect(screen.getByText("0")).toBeInTheDocument();

    const addBtn = screen.getByText("Add");
    fireEvent.click(addBtn);

    expect(screen.getByText("1")).toBeInTheDocument();
  });

  it("should remove from todos", () => {
    const TestComponent = () => {
      const { todos, addTodo, removeTodo } = useTodo();
      return (
        <div>
          {todos.length}
          <button onClick={() => addTodo("New todo")}>Add</button>
          <button onClick={() => removeTodo(todos[0].id)}>Remove</button>
        </div>
      );
    };

    render(
      <TodoProvider>
        <TestComponent />
      </TodoProvider>,
    );

    expect(screen.getByText("0")).toBeInTheDocument();
    const addBtn = screen.getByText("Add");
    const removeBtn = screen.getByText("Remove");

    fireEvent.click(addBtn);

    expect(screen.getByText("1")).toBeInTheDocument();

    fireEvent.click(removeBtn);

    expect(screen.getByText("0")).toBeInTheDocument();
  });

  it("should edit todo", async () => {
    const todos = [{ id: 1, text: "Old Todo", completed: false }];
    localStorage.setItem("todos-key", JSON.stringify(todos));

    const TestComponent = () => {
      const { todos, editTodo, addTodo } = useTodo();
      return (
        <div>
          {todos.length > 0 && (
            <>
              <div>{todos[0].text}</div>
              <div>{todos.length}</div>
            </>
          )}
          <button onClick={() => addTodo("Text")}>Add</button>
          <button onClick={() => editTodo(todos[0].id, "New text")}>
            Edit
          </button>
        </div>
      );
    };

    render(
      <TodoProvider>
        <TestComponent />
      </TodoProvider>,
    );

    await waitFor(() => {
      expect(screen.getByText("Old Todo")).toBeInTheDocument();
      expect(screen.getByText("1")).toBeInTheDocument();
    });

    const editBtn = screen.getByText("Edit");
    fireEvent.click(editBtn);

    await screen.findByText("New text");
  });
});
