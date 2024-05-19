import { render, screen } from "@testing-library/react";
import Navbar from "./index";
import { BrowserRouter as Router } from "react-router-dom";

describe("Navbar компонент", () => {
  it("отображает ссылки на разделы навигации", () => {
    render(
      <Router>
        <Navbar />
      </Router>,
    );
    expect(screen.getByRole("link", { name: /Каталог товаров/i })).toBeTruthy();
    expect(screen.getByRole("link", { name: /Новости/i })).toBeTruthy();
    expect(screen.getByRole("link", { name: /Контакты/i })).toBeTruthy();
    expect(screen.getByRole("link", { name: /Аккаунт/i })).toBeTruthy();
  });
});
