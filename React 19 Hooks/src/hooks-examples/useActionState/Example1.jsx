import { useActionState } from "react";

async function likePost(prevState, postId) {
  try {
    console.log(prevState);
    
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ likes: prevState.likes + 1 }),
    });

    if (!response.ok) throw new Error("Failed to like post");

    return { likes: prevState.likes + 1, error: null };
  } catch (error) {
    return { ...prevState, error: "Failed to like post" };
  }
}

export default function Example1({ postId=1 }) {
  const [state, like, isPending] = useActionState(likePost, { likes: 0, error: null });

  return (
    <div>
      <button onClick={() => like(postId)} disabled={isPending}>
        {isPending ? "Liking..." : `👍 Like (${state.likes})`}
      </button>
      {state.error && <p style={{ color: "red" }}>{state.error}</p>}
    </div>
  );
}
