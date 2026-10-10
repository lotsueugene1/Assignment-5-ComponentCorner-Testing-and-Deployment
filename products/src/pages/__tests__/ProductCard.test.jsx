
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import ProductCard from '../../components/ProductCard';

describe("ProductCard", () => {
  const product = {
    name: "Wireless Headphones",
    price: "$49.99",
    image: "https://placehold.co/400x400",
    description: "High-quality wireless headphones",
    addToCart: vi.fn(),
  };

  it("renders without crashing", () => {
    render(<ProductCard {...product} />);
  });

  it("displays the product name, price, and description", () => {
    render(<ProductCard {...product} />);

    expect(
      screen.getByRole("heading", { name: "Wireless Headphones" })
    ).toBeInTheDocument();

    expect(screen.getByText("$49.99")).toBeInTheDocument();

    expect(
      screen.getByText("High-quality wireless headphones")
    ).toBeInTheDocument();
  });

  it("displays the product image with the correct alt text", () => {
    render(<ProductCard {...product} />);

    const image = screen.getByRole("img", {
      name: "Wireless Headphones product",
    });

    expect(image).toHaveAttribute(
      "src",
      "https://placehold.co/400x400"
    );
  });

  it("uses the default image when no image is provided", () => {
    render(<ProductCard {...product} image={undefined} />);

    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      "https://placehold.co/600x400"
    );
  });

  it("calls addToCart when the Add to Cart button is clicked", () => {
    render(<ProductCard {...product} />);

    fireEvent.click(screen.getByRole("button", { name: /add to cart/i }));

    expect(product.addToCart).toHaveBeenCalledTimes(1);
  });
});