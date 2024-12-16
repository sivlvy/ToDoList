import "@testing-library/jest-dom";
import { CustomButton } from "./CustomButton";
import { fireEvent, render, screen } from "@testing-library/react";

describe("CustomButton", () => {
  it("should render with correct text", () => {
    render(<CustomButton text="text" />);
    const btn = screen.getByText("text");
    expect(btn).toBeInTheDocument("text");
  });

  it("should calls onClick when clicked", () => {
    const onClick = jest.fn();
    render(<CustomButton onClick={onClick} text="text" />);
    const btn = screen.getByText("text");
    fireEvent.click(btn);
    expect(onClick).toBeCalledTimes(1);
  });

  it("should render with correct styles", () => {
    render(<CustomButton text="text" type="add" />);
    const btnEl = screen.getByRole("button");
    expect(btnEl).toHaveClass("btn--add");
  });
});
