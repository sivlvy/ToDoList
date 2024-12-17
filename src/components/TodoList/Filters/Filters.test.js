import "@testing-library/jest-dom";

import { Filters } from "./Filters";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Filters", () => {
  const setFilterMock = jest.fn();

  beforeEach(() => {
    setFilterMock.mockClear();
  });

  it("renders all filter buttons", () => {
    render(<Filters activeFilter="all" setFilter={setFilterMock} />);

    expect(screen.getByText("Completed")).toBeInTheDocument();
    expect(screen.getByText("Not completed")).toBeInTheDocument();
    expect(screen.getByText("All")).toBeInTheDocument();
  });

  it("calls setFilter with true when Completed btn is clicked", () => {
    render(<Filters activeFilter="all" setFilter={setFilterMock} />);

    fireEvent.click(screen.getByText("Completed"));
    expect(setFilterMock).toHaveBeenCalledWith("true");
  });

  it("calls setFilter with false when Not Completed btn is clicked", () => {
    render(<Filters activeFilter="all" setFilter={setFilterMock} />);

    fireEvent.click(screen.getByText("Not completed"));
    expect(setFilterMock).toHaveBeenCalledWith("false");
  });

  it("calls setFilter with 'all' when All button is clicked", () => {
    render(<Filters setFilter={setFilterMock} activeFilter="all" />);

    fireEvent.click(screen.getByText("All"));
    expect(setFilterMock).toHaveBeenCalledWith("all");
  });

  it("applies active styles based on activeFilter", () => {
    render(<Filters activeFilter="true" setFilter={setFilterMock} />);

    const completedBtn = screen.getByText("Completed");
    const notCompletedBtn = screen.getByText("Not completed");
    const allBtn = screen.getByText("All");

    expect(completedBtn.parentElement).toHaveClass("btn--true");
    expect(notCompletedBtn.parentElement).not.toHaveClass("btn--true");
    expect(allBtn.parentElement).not.toHaveClass("btn--true");
  });
});
