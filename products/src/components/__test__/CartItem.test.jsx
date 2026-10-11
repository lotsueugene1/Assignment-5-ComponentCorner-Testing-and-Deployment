import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import CartItem from '../CartItem';

describe('CartItem component', () => {
    test('renders the CartItem component', () => {
        const removeFromCart = vi.fn();

        render(
            <CartItem
                name="Wireless Headphones"
                price={99.99}
                removeFromCart={removeFromCart}
            />
        );

        expect(screen.getByText('Wireless Headphones')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /remove/i })).toBeInTheDocument();
    });

    test('displays item information (name and price)', () => {
        const removeFromCart = vi.fn();

        render(
            <CartItem
                name="Wireless Headphones"
                price={99.99}
                removeFromCart={removeFromCart}
            />
        );

        expect(screen.getByText('Wireless Headphones')).toBeInTheDocument();
        expect(screen.getByText('$99.99')).toBeInTheDocument();
    });

    test('calls removeFromCart when the Remove button is clicked', () => {
        const removeFromCart = vi.fn();

        render(
            <CartItem
                name="Wireless Headphones"
                price={99.99}
                removeFromCart={removeFromCart}
            />
        );

        fireEvent.click(screen.getByRole('button', { name: /remove/i }));

        expect(removeFromCart).toHaveBeenCalledTimes(1);
    });
});