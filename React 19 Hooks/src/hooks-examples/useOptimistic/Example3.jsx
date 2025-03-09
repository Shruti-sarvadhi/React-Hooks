import { useState, startTransition } from "react";

async function addComment(postId, comment) {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate network delay

  const response = await fetch("https://jsonplaceholder.typicode.com/comments", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ postId, body: comment }),
  });

  return response.ok ? comment : null;
}

export default function Example3({ postId }) {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false); // Track submission state

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newComment = comment;

    // Optimistically update the UI
    startTransition(() => {
      setComments((prev) => [...prev, newComment]);
    });

    setIsSubmitting(true); // Indicate that a submission is in progress

    try {
      const confirmedComment = await addComment(postId, newComment);

      if (!confirmedComment) {
        // Revert the optimistic update if the API call fails
        setComments((prev) => prev.filter((cmt) => cmt !== newComment));
      }
    } catch (error) {
      // Revert the optimistic update if there's an error
      setComments((prev) => prev.filter((cmt) => cmt !== newComment));
    } finally {
      setIsSubmitting(false); // Reset submission state
    }

    setComment(""); // Clear the input field
  };

  return (
    <div className="p-4 border rounded shadow-md">
      <h3>Comments</h3>
      <ul>
        {comments.map((cmt, idx) => (
          <li key={idx} className="border-b p-2">
            {cmt}
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit} className="mt-2">
        <input
          type="text"
          placeholder="Add a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="border p-2 w-full"
          disabled={isSubmitting} // Disable input while submitting
        />
        <button
          type="submit"
          disabled={isSubmitting} // Disable button while submitting
          className="bg-blue-500 text-white p-2 mt-2 w-full rounded disabled:bg-blue-300"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}