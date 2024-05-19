import { render, screen } from "@testing-library/react";
import News from "./Index";

describe("News component", () => {
  it("renders the DynamicPagination component", () => {
    render(<News />);
    const dynamicPaginationElement = screen.getByTestId("dynamic-pagination");
    expect(dynamicPaginationElement).toBeInTheDocument();
  });
});
