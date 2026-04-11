import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "@jest/globals";
import AppSetting from "@/pages/setting/app";

describe("AppSetting", () => {
  it("renders correctly", () => {
    const page = render(<AppSetting />);

    expect(screen.getByText("App Setting").textContent).toBe("App Setting");

    expect(page).toMatchSnapshot();
  });
});