import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import CartItem from "../../components/CartItem";

const mockPainting = {
  id: "1",
  title: "Test Painting",
  price: 100,
  imageUrl: "/test.jpg",
  dimensions: "10x10",
  quantity: 1,
};

describe("CartItem", () => {
  test("renders cart item correctly", () => {
    render(
      <Provider store={store}>
        <CartItem item={mockPainting} />
      </Provider>
    );

    expect(screen.getByText("Test Painting")).toBeInTheDocument();
    expect(screen.getByText("$100")).toBeInTheDocument();
  });

  test("quantity can be updated", () => {
    render(
      <Provider store={store}>
        <CartItem item={mockPainting} />
      </Provider>
    );

    const quantitySelect = screen.getByRole("combobox");
    fireEvent.change(quantitySelect, { target: { value: "2" } });

    // Check if redux store was updated
    expect(store.getState().cart.items[0].quantity).toBe(2);
  });
});
