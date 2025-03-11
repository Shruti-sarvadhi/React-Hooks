interface AlertProps {
    type: "success" | "error" | "warning" | "info";
    message: string;
  }
  
  const Alert = ({ type, message }: AlertProps) => {
    const bgColor =
      type === "success"
        ? "bg-green-100 border-green-500 text-green-700"
        : type === "error"
        ? "bg-red-100 border-red-500 text-red-700"
        : type === "warning"
        ? "bg-yellow-100 border-yellow-500 text-yellow-700"
        : "bg-blue-100 border-blue-500 text-blue-700";
  
    return (
      <div className={`border-l-4 p-3 mb-4 ${bgColor} rounded`}>
        <p className="text-sm font-medium">{message}</p>
      </div>
    );
  };
  
  export default Alert;
  