import { render } from "@testing-library/react";
import { describe, expect, it } from "@jest/globals";
import PasswordUserPage from "@/pages/user/password";

describe("PasswordUserPage", () => {
  it("renders password user page correctly", () => {
    const page = render(<PasswordUserPage />);
    
    // Menggunakan snapshot untuk memastikan render sederhana sesuai
    expect(page).toMatchSnapshot();
  });

  it("should contain the correct text", () => {
    const { getByText } = render(<PasswordUserPage />);
    
    // Memastikan teks judul halaman muncul
    expect(getByText("Password User Page")).toBeTruthy();
  });
});