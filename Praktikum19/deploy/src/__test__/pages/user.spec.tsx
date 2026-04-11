import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "@jest/globals";
import UserSettingPage from "@/pages/user";

describe("UserSettingPage", () => {
  it("renders correctly", () => {
    const page = render(<UserSettingPage />);

    const element = screen.getByText("User Setting Page");

    expect(element.textContent).toBe("User Setting Page");

    expect(page).toMatchSnapshot();
  });
});