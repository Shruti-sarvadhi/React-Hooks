import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: React.ReactNode;
  }

const Input = ({ label, error, ...rest }: InputProps) => {
  return (
    <div className="flex flex-col mb-3">
      <label className="font-medium">{label}</label>
      <input
        {...rest}
        className="border rounded p-2 focus:outline-none focus:ring-2"
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default Input;
