import { render } from "@testing-library/react";
import { describe, expect, it } from "@jest/globals";
import Custom404 from "@/pages/404";

describe("Custom404", () => {
  it("renders 404 page correctly", () => {
    const page = render(<Custom404 />);
    
    expect(page).toMatchSnapshot();
  });
});