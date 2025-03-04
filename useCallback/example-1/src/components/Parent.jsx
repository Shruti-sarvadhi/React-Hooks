import { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";
import { useMemo,useCallback } from "react";

const Parent = () => {
  const [parent, setParent] = useState(0);
  const [child1, setChild1] = useState(0);
  const [child2, setChild2] = useState(0);

  const updateParent = () => {
    setParent(Math.floor(Math.random() * 100) + 1);
  };


  // dependency array changes only then it will treat the function as new
  const updateChild1 = useCallback(() => {
    setChild1(Math.floor(Math.random() * 100) + 1);
  }, [child1]);

  const updateChild2 =  useCallback(() => {
    setChild2(Math.floor(Math.random() * 100) + 1);
  }, [child2]);

  console.log("Parent rerendered");
  

  return (
    <>
      <p>Parent - {parent}</p>
      <button onClick={updateParent}>Update Parent</button>
      <button onClick={updateChild1}>Update Child 1</button>
      <button onClick={updateChild2}>Update Child 2</button>
      <Child1 value={child1} />
      <Child2 value={child2} />
    </>
  );
};

export default Parent
