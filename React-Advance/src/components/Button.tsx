import { forwardRef, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

// Wrapping the component with forwardRef
const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ isLoading, children, ...rest }, ref) => {
  return (
    <button
      ref={ref}
      {...rest}
      disabled={isLoading}
      className={`px-4 py-2 bg-blue-600 text-white rounded ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      {isLoading ? "Processing..." : children}
    </button>
  );
});

export default Button;
