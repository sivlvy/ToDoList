import { ThemeProvider, useTheme } from "./ThemeContext";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("ThemeProvider", () => {
  it("theme is initialized", () => {
    const LS = Storage.prototype.getItem;
    Storage.prototype.getItem = jest.fn(() => "dark");

    render(
      <ThemeProvider>
        <Child />
      </ThemeProvider>,
    );

    expect(document.body).toHaveClass("dark");

    Storage.prototype.getItem = LS;
  });

  const Child = () => {
    const { theme } = useTheme();
    return <div>{theme}</div>;
  };
});
