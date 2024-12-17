import "@testing-library/jest-dom";
import { AddTodo } from "./AddTodo";
import { useTodo } from "../../../context/TodoContext/TodoContext";
import { fireEvent, render, screen } from "@testing-library/react";

jest.mock("../../../context/TodoContext/TodoContext", () => ({
  useTodo: jest.fn(),
}));

describe("AddTodo", () => {
  const addTodo = jest.fn();

  beforeEach(() => {
    useTodo.mockReturnValue({
      addTodo,
    });
  });

  it("should render component", () => {
    render(<AddTodo />);

    const inputEl = screen.getByPlaceholderText("Type your task");
    expect(inputEl).toBeInTheDocument();

    const btnEl = screen.getByText("Add");
    expect(btnEl).toBeInTheDocument();
  });

  it("should update value while typing", () => {
    render(<AddTodo />);

    const inputEl = screen.getByPlaceholderText("Type your task");

    fireEvent.change(inputEl, { target: { value: "Test task" } });

    expect(inputEl.value).toBe("Test task");
  });

  it("calls addTodo with the correct value and clears input on button click", () => {
    render(<AddTodo />);

    const inputEl = screen.getByPlaceholderText("Type your task");
    const buttonEl = screen.getByText("Add");

    fireEvent.change(inputEl, { target: { value: "Test task" } });
    fireEvent.click(buttonEl);

    expect(addTodo).toHaveBeenCalledWith("Test task");
    expect(inputEl.value).toBe("");
  });

  it("doesnt call with empty input", () => {
    render(<AddTodo />);

    const buttonEl = screen.getByText("Add");

    fireEvent.click(buttonEl);

    expect(addTodo).not.toHaveBeenCalled();
  });
});
