import { CustomModal } from "./CustomModal";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("CustomModal", () => {
  it("should not render modal content when openModal is false", () => {
    render(<CustomModal openModal={false} />);
    const modalContent = screen.queryByTestId("modalContent");
    expect(modalContent).not.toBeInTheDocument();
  });

  it("should render modal content when openModal is true", () => {
    render(
      <CustomModal openModal={true}>
        <div data-testid="modalContent"></div>
      </CustomModal>,
    );

    const modalContent = screen.queryByTestId("modalContent");

    expect(modalContent).toBeInTheDocument();
  });

  it("should not close when clicked inside modal content", () => {
    const setOpenModal = jest.fn();
    const { getByTestId } = render(
      <CustomModal openModal={true} setOpenModal={setOpenModal}>
        <div data-testid="modalContent">Test Content</div>
      </CustomModal>,
    );
    fireEvent.click(getByTestId("modalContent"));
    expect(setOpenModal).not.toHaveBeenCalled();
  });
});
