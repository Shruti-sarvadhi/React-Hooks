import React, { useState } from "react";

const ConditionalRenderingExample = () => {
  const [isLogIn, setIsLogIn] = useState(false);
  //based on user login or not the component could be rendered conditionally

  return (
    <>
    <div>
      {isLogIn?"welcome user":"please login"}
    </div>
    <button onClick={()=>setIsLogIn(!isLogIn)}>{isLogIn?"logout":"login"}</button>
    </>
    
  );
};

export default ConditionalRenderingExample;
