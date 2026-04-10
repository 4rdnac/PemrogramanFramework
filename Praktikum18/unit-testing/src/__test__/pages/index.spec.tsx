import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "@jest/globals";
import Home from "@/pages/";

describe("Home Page", () => {
  it("renders home page correctly", () => {
    const page = render(<Home />);
    
    expect(page).toMatchSnapshot();
  });

  it("should display the correct heading and text", () => {
    render(<Home />);
    
    const heading = screen.getByRole("heading", {
      name: /praktikum next.js pages router/i,
    });
    expect(heading).toBeTruthy();

    const paragraph = screen.getByText(/mahasiswa d4 pengembangan web/i);
    expect(paragraph).toBeTruthy();
  });
});