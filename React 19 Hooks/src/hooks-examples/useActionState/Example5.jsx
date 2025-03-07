import { useActionState } from "react";

async function votes(prevState, voteType) {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ voteType }),
    });

    if (!response.ok) throw new Error("Voting failed");

    return {
      upvotes: voteType === "upvote" ? prevState.upvotes + 1 : prevState.upvotes,
      downvotes: voteType === "downvote" ? prevState.downvotes + 1 : prevState.downvotes,
      error: null,
    };
  } catch {
    return { ...prevState, error: "Voting failed" };
  }
}

export default function Example5() {
  const [state, vote, isPending] = useActionState(votes, { upvotes: 0, downvotes: 0, error: null });

  return (
    <div>
      <button onClick={() => vote("upvote")} disabled={isPending}>👍 {state.upvotes}</button>
      <button onClick={() => vote("downvote")} disabled={isPending}>👎 {state.downvotes}</button>
      {state.error && <p style={{ color: "red" }}>{state.error}</p>}
    </div>
  );
}
