import React from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addToCart, removeFromCart, clearCart } from "@/store/slices/user/cartSlice";

const Example3 = () => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.user.cart.cart) || []; // Ensure cart is an array

  console.log("Cart from Redux:", cart); //   Debugging cart state

  const products = [
    { id: 1, name: "Shirt", price: 20 },
    { id: 2, name: "Pants", price: 30 },
  ];

  return (
    <div>
      <h2>Products</h2>
      {products?.map((product) => (
        <button key={product.id} onClick={() => dispatch(addToCart({ ...product }))}>
          Add {product.name} (${product.price})
        </button>
      ))}

      <h2>Cart</h2>
      <ul>
        {cart.length > 0 ? (
          cart?.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price}
              <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
            </li>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </ul>
      <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
    </div>
  );
};

export default Example3;
