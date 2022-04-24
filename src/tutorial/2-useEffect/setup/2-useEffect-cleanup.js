import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const changeSize = () => {
    console.log("Changes to window size");
    setSize(window.innerWidth);
  };

  //Before running useEffect again, it will return
  useEffect(() => {
    console.log("Useeffect Setup");
    window.addEventListener("resize", changeSize);
    return () => {
      console.log("useeffect Cleanup");
      window.removeEventListener("resize", changeSize);
    };
  });

  return (
    <>
      <h1>Window Size</h1>
      <h2>{size} px</h2>
      {console.log("return in jsx")}
    </>
  );
};

export default UseEffectCleanup;
