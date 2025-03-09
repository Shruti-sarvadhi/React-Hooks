import { useState } from "react";

async function likePost(postId, liked) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ liked }),
  });

  return response.ok ? liked : !liked; // Revert if the request fails
}

export default function Example2({ postId }) {
  const [liked, setLiked] = useState(false);
  const [isPending, setIsPending] = useState(false); // Track pending state

  const handleLike = async () => {
    const newLikedState = !liked;

    // Optimistically update the UI
    setLiked(newLikedState);
    setIsPending(true); // Indicate that an update is in progress

    try {
      const confirmedLiked = await likePost(postId, newLikedState);
      setLiked(confirmedLiked); // Sync with real state after API confirmation
    } catch (error) {
      setLiked(liked); // Revert if API call fails
    } finally {
      setIsPending(false); // Reset pending state
    }
  };

  return (
    <div className="p-4 border rounded shadow-md">
      <p>Post #{postId}</p>
      <button
        onClick={handleLike}
        disabled={isPending} // Disable button while pending
        className={`mt-2 ${
          liked ? "bg-red-500" : "bg-gray-500"
        } text-white p-2 rounded transition-all duration-150 ease-in-out`}
      >
        {liked ? "❤️ Liked" : "🤍 Like"}
      </button>
    </div>
  );
}