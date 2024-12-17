import "@testing-library/jest-dom";
import { useTodo } from "../../../../context/TodoContext/TodoContext";
import { EditPopUp } from "./EditPopUp";
import { fireEvent, render, screen } from "@testing-library/react";

jest.mock("../../../../context/TodoContext/TodoContext", () => ({
  useTodo: jest.fn(),
}));

describe("EditPopUp", () => {
  const setIsModalOpen = jest.fn();
  const editTodo = jest.fn();
  const mockItem = { id: 1, text: "Test todo" };

  beforeEach(() => {
    useTodo.mockReturnValue({
      editTodo,
    });
  });

  it("renders input and button components", () => {
    render(<EditPopUp item={mockItem} setIsModalOpen={setIsModalOpen} />);

    expect(screen.getByPlaceholderText("Edit")).toBeInTheDocument();
    expect(screen.getByText("Edit")).toBeInTheDocument();
  });

  it("updates input value on change", () => {
    render(<EditPopUp item={mockItem} setIsModalOpen={setIsModalOpen} />);

    const input = screen.getByPlaceholderText("Edit");
    fireEvent.change(input, { target: { value: "Updated todo" } });

    expect(input.value).toBe("Updated todo");
  });

  it("calls editTodo and setIsModalOpen on button click", () => {
    render(<EditPopUp item={mockItem} setIsModalOpen={setIsModalOpen} />);

    const input = screen.getByPlaceholderText("Edit");
    const btn = screen.getByText("Edit");

    fireEvent.change(input, { target: { value: "Updated todo" } });
    fireEvent.click(btn);

    expect(editTodo).toHaveBeenCalledWith(mockItem.id, "Updated todo");
    expect(setIsModalOpen).toHaveBeenCalledWith(false);

    expect(input.value).toBe("");
  });
});
