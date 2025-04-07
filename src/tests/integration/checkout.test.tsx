import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { addToCart } from "../../redux/slices/cartSlice";
import CartPage from "../../pages/cart";

describe("Checkout Flow", () => {
  test("complete checkout process", async () => {
    // Add an item to cart first
    store.dispatch(
      addToCart({
        id: "1",
        title: "Test Painting",
        price: 100,
        imageUrl: "/test.jpg",
        dimensions: "10x10",
        quantity: 1,
        artist: "Test Artist",
        category: "landscape",
      })
    );

    render(
      <Provider store={store}>
        <CartPage />
      </Provider>
    );

    const checkoutButton = screen.getByText(/proceed to checkout/i);
    fireEvent.click(checkoutButton);

    await waitFor(() => {
      expect(screen.getByText("Order Summary")).toBeInTheDocument();
    });
  });
});
