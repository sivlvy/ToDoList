import { CustomInput } from "./CustomInput";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("CustomInput", () => {
  it("should render input field", () => {
    render(
      <CustomInput value="test" onChange={() => {}} placeholder="Enter text" />,
    );

    const inputElement = screen.getByPlaceholderText(/enter text/i); // перевірка placeholder
    expect(inputElement).toBeInTheDocument();
  });

  it("should calls onChange when input value changes", () => {
    const handleChange = jest.fn();
    const { getByRole } = render(
      <CustomInput onChange={handleChange} value="" />,
    );
    const inputEl = getByRole("textbox");

    fireEvent.change(inputEl, { target: { value: "test" } });

    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
