import { render, screen, waitFor, fireEvent, within } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import App from '../App';

const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  clear: vi.fn(),
  removeItem: vi.fn(),
};

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
  configurable: true,
});

describe('App cart state management', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorageMock.getItem.mockReturnValue(null);
    window.history.pushState({}, '', '/');
  });

  it('renders the App component', () => {
    render(<App />);

    // Verify that the shared layout renders.
    expect(document.querySelector('.app')).toBeTruthy();
  });

  it('loads cart data from localStorage on startup', async () => {
    const savedCart = [
      {
        id: 1,
        name: 'Wireless Headphones',
        price: 99.99,
        image: 'https://placehold.co/600x400',
        description:
          'Premium noise-cancelling headphones with 30-hour battery life',
      },
    ];

    localStorageMock.getItem.mockReturnValue(JSON.stringify(savedCart));
    window.history.pushState({}, '', '/cart');

    render(<App />);

    expect(localStorageMock.getItem).toHaveBeenCalledWith('cart');

    expect(
      await screen.findByText(/wireless headphones/i)
    ).toBeTruthy();
  });

  it('saves cart changes to localStorage', async () => {
    window.history.pushState({}, '', '/products');

    render(<App />);

    // Find the Wireless Headphones product and its Add to Cart button.
    const productName = await screen.findByText(/wireless headphones/i);
    const productCard = productName.closest(
      '.product-card, article, li'
    );

    let addButton;

    if (productCard) {
      addButton = within(productCard).getByRole('button', {
        name: /add to cart/i,
      });
    } else {
      const buttons = screen.getAllByRole('button', {
        name: /add to cart/i,
      });

      // Wireless Headphones is the first product in App.jsx.
      addButton = buttons[0];
    }

    fireEvent.click(addButton);

    await waitFor(() => {
      expect(localStorageMock.setItem).toHaveBeenCalledWith(
        'cart',
        expect.stringContaining('Wireless Headphones')
      );
    });
  });
});