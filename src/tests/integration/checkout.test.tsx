import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import CartPage from "../../pages/cart";

describe("Checkout Flow", () => {
  test("complete checkout process", async () => {
    render(
      <Provider store={store}>
        <CartPage />
      </Provider>
    );

    // Add items to cart
    // Check shipping calculation
    // Test checkout button
    // Verify order confirmation

    const checkoutButton = screen.getByText("Proceed to Checkout");
    fireEvent.click(checkoutButton);

    await waitFor(() => {
      expect(screen.getByText("Order Summary")).toBeInTheDocument();
    });
  });
});
