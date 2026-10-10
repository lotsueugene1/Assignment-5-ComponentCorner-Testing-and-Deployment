
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import HomePage from "../HomePage";


vi.mock("../../components/Hero", () => ({
  default: () => <div>Hero Component</div>,
}));

describe("HomePage", () => {
  it("renders without crashing", () => {
    render(<HomePage />);
  });

  it("displays the main content", () => {
    render(<HomePage />);

    expect(
      screen.getByRole("heading", { name: "Why Shop with Us?" })
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        "We offer quality products at affordable prices with great customer service."
      )
    ).toBeInTheDocument();

    expect(screen.getByText("Hero Component")).toBeInTheDocument();
  });
});
