import "@testing-library/jest-dom";

import { TodoList } from "./TodoList";
import { useTodo } from "../../context/TodoContext/TodoContext";
import { useTheme } from "../../context/ThemeContext/ThemeContext";
import { fireEvent, render, screen } from "@testing-library/react";

jest.mock("../../context/TodoContext/TodoContext", () => ({
  useTodo: jest.fn(),
}));

jest.mock("../../context/ThemeContext/ThemeContext", () => ({
  useTheme: jest.fn(),
}));

describe("TodoList", () => {
  const mockToggleTheme = jest.fn();
  const mockSetFilter = jest.fn();

  beforeEach(() => {
    useTodo.mockReturnValue({
      todos: [
        { id: 1, text: "Task 1", completed: false },
        { id: 2, text: "Task 2", completed: true },
      ],
    });

    useTheme.mockReturnValue({
      theme: "light",
      toggleTheme: mockToggleTheme,
    });
  });

  it("renders component with all tasks", () => {
    render(<TodoList />);

    expect(screen.getByText("Task 1")).toBeInTheDocument();
    expect(screen.getByText("Task 2")).toBeInTheDocument();

    expect(screen.getByText("light")).toBeInTheDocument();
    expect(screen.queryByText("You are haven't tasks")).not.toBeInTheDocument();
  });

  it("renders filtered tasks", () => {
    render(<TodoList />);

    fireEvent.click(screen.getByText("Completed"));
    useTodo.mockReturnValue({
      todos: [{ id: 2, text: "Task 2", comleted: true }],
    });

    expect(screen.getByText("Task 2")).toBeInTheDocument();
    expect(screen.queryByText("Task 1")).not.toBeInTheDocument();
  });

  it("should render text without todos", () => {
    useTodo.mockReturnValue({ todos: [] });
    render(<TodoList />);

    expect(screen.getByText("You are haven't tasks")).toBeInTheDocument();
  });

  it("calls toggleTheme on theme button click", () => {
    render(<TodoList />);

    fireEvent.click(screen.getByText("light"));
    expect(mockToggleTheme).toHaveBeenCalled();
  });
});
