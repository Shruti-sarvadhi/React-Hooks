import { useState, useDebugValue } from "react";

function useFormInput(initialValue = "") {
  const [value, setValue] = useState(initialValue);

  useDebugValue(`Input: "${value}"`);
  

  return { value, onChange: (e) => setValue(e.target.value) };
}

export default useFormInput
