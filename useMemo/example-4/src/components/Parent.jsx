import { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";
import { useMemo } from "react";

const Parent = () => {
  const [parent, setParent] = useState(0);
  const [child1, setChild1] = useState(0);
  const [child2, setChild2] = useState(0);

  const updateParent = () => {
    setParent(Math.floor(Math.random() * 100) + 1);
  };

  const updateChild1 = () => {
    setChild1(Math.floor(Math.random() * 100) + 1);
  };

  const updateChild2 = () => {
    setChild2(Math.floor(Math.random() * 100) + 1);
  };

  console.log("Parent rerendered");
   //Memoizing values so they do not change unnecessarily
   //so when child 1 rendered parent is no re-rendering 
   const memoizedChild1 = useMemo(() => child1, [child1]);
   const memoizedChild2 = useMemo(() => child2, [child2]);

  return (
    <>
      <p>Parent - {parent}</p>
      <button onClick={updateParent}>Update Parent</button>
      <button onClick={updateChild1}>Update Child 1</button>
      <button onClick={updateChild2}>Update Child 2</button>
      <Child1 value={memoizedChild1} />
      <Child2 value={memoizedChild2} />
    </>
  );
};

export default Parent
