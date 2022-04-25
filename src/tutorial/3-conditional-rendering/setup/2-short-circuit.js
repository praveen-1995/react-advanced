import React, { useState } from "react";

// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);

  // const firstValue = text || "hello world";
  // const secondValue = text && "hello world";

  return (
    <>
      {/* <h1>{firstValue}</h1>
      <h1>second value: {secondValue}</h1> */}

      {text || <h1>hello OR</h1>}

      <button
        className="btn"
        onClick={() => {
          setIsError(!isError);
        }}
      >
        toggle error
      </button>
      {isError && <h1>Error....</h1>}

      {isError ? (
        <p>There is an error...</p>
      ) : (
        <div>
          <h1>There is no error...</h1>
        </div>
      )}

      {/* {!text && <h1>hello AND</h1>} */}
    </>
  );
};

export default ShortCircuit;
