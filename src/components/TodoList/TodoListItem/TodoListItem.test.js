import "@testing-library/jest-dom";
import { TodoListItem } from "./TodoListItem";
import { useTodo } from "../../../context/TodoContext/TodoContext";
import { fireEvent, render, screen } from "@testing-library/react";

jest.mock("../../../context/TodoContext/TodoContext", () => ({
  useTodo: jest.fn(),
}));

describe("TodoListItem", () => {
  const mockItem = { id: 1, text: "Test todo", completed: false };
  const removeTodo = jest.fn();
  const toggleTodo = jest.fn();

  beforeEach(() => {
    useTodo.mockReturnValue({
      removeTodo,
      toggleTodo,
    });
  });

  it("should render correctly", () => {
    render(<TodoListItem item={mockItem} />);

    expect(screen.getByText("Test todo")).toBeInTheDocument();

    expect(screen.getByText("Not Completed")).toBeInTheDocument();
    expect(screen.getByText("Edit")).toBeInTheDocument();
    expect(screen.getByText("Remove")).toBeInTheDocument();
  });

  it("calls toggleTodo when button is clicked", () => {
    render(<TodoListItem item={mockItem} />);

    const statusBtn = screen.getByText("Not Completed");

    fireEvent.click(statusBtn);

    expect(toggleTodo).toHaveBeenCalledWith(mockItem.id);
  });

  it("calls removeTodo when remove btn is clicked", () => {
    render(<TodoListItem item={mockItem} />);

    const removeBtn = screen.getByText("Remove");

    fireEvent.click(removeBtn);

    expect(removeTodo).toHaveBeenCalledWith(mockItem.id);
  });

  it("opens modal when edit button is clicked", () => {
    render(<TodoListItem item={mockItem} />);

    const editButton = screen.getByText("Edit");

    expect(screen.queryByPlaceholderText("Edit")).not.toBeInTheDocument();
    fireEvent.click(editButton);
    expect(screen.getByPlaceholderText("Edit")).toBeInTheDocument();
  });
});
