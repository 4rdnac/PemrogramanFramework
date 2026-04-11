import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "@jest/globals";
import Edit from "../../pages/profile/edit";

describe("Edit Profile Page", () => {
  it("renders correctly", () => {
    const page = render(<Edit />);

    const heading = screen.getByText("Page Edit Profile");

    expect(heading.textContent).toBe("Page Edit Profile");

    const container = page.container;
    const element = container.firstChild;

    expect(element).not.toBeNull();

    expect(page).toMatchSnapshot();
  });
});