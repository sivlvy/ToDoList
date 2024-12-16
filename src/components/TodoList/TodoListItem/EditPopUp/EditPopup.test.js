import "@testing-library/jest-dom";

import { EditPopUp } from "./EditPopUp";
import { TodoContext } from "../../../../context/TodoContext/TodoContext";
import { screen, waitFor } from "@testing-library/react";

jest.mock("../../../../UI-components/CustomButton/CustomButton", () => ({
  CustomButton: ({ text, onClick }) => (
    <button onClick={onClick}>{text}</button>
  ),
}));

jest.mock("../../../../UI-components/CustomInput/CustomInput", () => ({
  CustomInput: ({ value, onChange, placeholder }) => (
    <input value={value} onChange={onChange} placeholder={placeholder} />
  ),
}));

describe("EditPopUp", () => {
  const mockSetIsOpenModal = jest.fn();
  const mockEditToDo = jest.fn();

  const item = { id: 1, text: "Todo", completed: false };

  const renderWithContext = () => {
    return (
      <TodoContext.Provider value={{ editTodo: mockEditToDo }}>
        <EditPopUp item={item} setIsModalOpen={mockSetIsOpenModal} />
      </TodoContext.Provider>
    );
  };

  it("should render input and button", async () => {
    renderWithContext();
    await waitFor(() => {
      expect(screen.getByPlaceholderText("Edit")).toBeInTheDocument();
      expect(screen.getByText("Edit")).toBeInTheDocument();
    });
  });
});
