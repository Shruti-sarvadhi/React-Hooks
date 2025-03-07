import { useActionState } from "react";
import { startTransition } from "react";

async function addToCart(prevState, product) {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });
   
    if(response.ok){
      alert("added to cart")
    }
    if (!response.ok) throw new Error("Failed to add to cart");

    return { cart: [...prevState.cart, product], error: null };
  } catch {
    return { ...prevState, error: "Failed to add to cart" };
  }
}

export default function Example4({ product="milk" }) {
  const [state, add, isPending] = useActionState(addToCart, { cart: [], error: null });

  return (
    <div>
      <h4>{product?.name}</h4>
      <button
        onClick={() => startTransition(() => add(product))}
        disabled={isPending}
      >
        {isPending ? "Adding..." : "Add to Cart"}
      </button>
      {state.error && <p style={{ color: "red" }}>{state.error}</p>}
    </div>
  );
}
