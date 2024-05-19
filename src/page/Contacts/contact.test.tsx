import { render, screen } from "@testing-library/react";
import "intersection-observer";
import Contact from "./index";

describe("Contact component", () => {
  it("renders 'Страница Контактов'", () => {
    render(<Contact />);
    expect(screen.getByText("Страница Контактов")).toBeInTheDocument();
  });
});
