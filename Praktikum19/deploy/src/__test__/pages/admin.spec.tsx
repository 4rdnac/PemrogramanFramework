import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "@jest/globals";
import HalamanAdmin from "@/pages/admin"; // sesuaikan path

describe("HalamanAdmin Page", () => {
  it("renders halaman admin correctly", () => {
    const page = render(<HalamanAdmin />);

    const heading = screen.getByText("Halaman Admin");

    const adminElement = heading.parentElement;

    expect(heading.textContent).toBe("Halaman Admin");

    expect(adminElement).not.toBeNull();

    expect(page).toMatchSnapshot();
  });
});
