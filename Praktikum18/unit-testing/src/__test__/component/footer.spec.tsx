import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "@jest/globals";
import Footer from "@/components/layouts/footer";

describe("Footer Component", () => {
  it("renders footer correctly", () => {
    const page = render(<Footer />);

    const footerElement = screen.getByTestId("footer");
    expect(footerElement.textContent).toBe("Footer");

    expect(page).toMatchSnapshot();
  });
});
