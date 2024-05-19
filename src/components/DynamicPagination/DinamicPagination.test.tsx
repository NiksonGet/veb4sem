import { render, screen } from "@testing-library/react";
import DynamicPagination from "./index";
import "intersection-observer";

describe("DynamicPagination component", () => {
  it("renders loading text initially", () => {
    render(<DynamicPagination />);
    expect(screen.getByText("Loading...")).toBeTruthy();
  });
  it("List Univers", () => {
    render(<DynamicPagination />);
    expect(screen.getByText("List Univers")).toBeTruthy();
  });
});
