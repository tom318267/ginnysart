import React from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../redux/slices/cartSlice";

const selectClassName = `p-2 pl-4 pr-10 border border-gray-300 rounded-md text-sm w-24 
  focus:outline-none focus:ring-2 focus:ring-custom-purple focus:border-custom-purple
  appearance-none bg-white bg-[url('/images/chevron-down.svg')] bg-no-repeat bg-[center_right_1rem] bg-[length:16px_16px]`;

interface CartItemProps {
  item: {
    id: string;
    title: string;
    price: number;
    imageUrl: string;
    dimensions: string;
    quantity: number;
  };
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col md:flex-row gap-4 border-b border-gray-300 py-4">
      <div className="flex items-start gap-4 flex-grow">
        <div className="relative w-24 h-24 flex-shrink-0">
          <Image
            src={item.imageUrl}
            alt={item.title}
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="flex-grow text-left">
          <h3 className="text-base font-medium text-gray-900">{item.title}</h3>
          <p className="text-sm text-gray-500 mt-1">
            Dimensions: {item.dimensions}
          </p>
          <p className="text-gray-600">${item.price}</p>
        </div>
      </div>
      <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
        <select
          value={item.quantity}
          onChange={(e) =>
            dispatch(
              updateQuantity({
                id: item.id,
                quantity: parseInt(e.target.value),
              })
            )
          }
          className={selectClassName}
        >
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
        <button
          onClick={() => dispatch(removeFromCart(item.id))}
          className="text-red-500 hover:text-red-700"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
