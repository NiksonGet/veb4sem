import { render, screen } from "@testing-library/react";
import "intersection-observer";
import Account from "./index";

describe("Account component", () => {
  it("renders 'Введите ваше имя' placeholder", () => {
    render(<Account />);
    const nameInput = screen.getByPlaceholderText("Введите ваше имя");
    expect(nameInput).toBeInTheDocument();
  });
});
