import { useActionState } from "react";



export default function Example3() {
  const [state, submit, isPending] = useActionState(submitForm, { success: false, error: null });

  async function submitForm(prevState, formData) {
  if (!formData.email.includes("@")) {
    return { ...prevState, error: "Invalid email address" };
  }
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (!response.ok) throw new Error("Signup failed");

    return { success: true, error: null };
  } catch {
    return { ...prevState, error: "Failed to submit form" };
  }
}

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const formData = { email: e.target.email.value };
        submit(formData);
      }}
    >
      <input type="email" name="email" placeholder="Enter your email" required />
      <button type="submit" disabled={isPending}>{isPending ? "Submitting..." : "Sign Up"}</button>
      {state.error && <p style={{ color: "red" }}>{state.error}</p>}
      {state.success && <p style={{ color: "green" }}>Signup successful!</p>}
    </form>
  );
}
