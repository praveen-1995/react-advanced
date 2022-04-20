import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Peter",
    age: 24,
    message: "random message",
  });

  function handleClick() {
    setPerson({ ...person, message: "hello world" });

    //Alternative way
    // setPerson((prevState) => {
    //   return { ...prevState, message: "hello world" };
    // });
  }

  return (
    <>
      <h2>{person.name}</h2>
      <h2>{person.age}</h2>
      <h2>{person.message}</h2>
      <button className="btn" onClick={handleClick}>
        Change Message
      </button>
    </>
  );
};

export default UseStateObject;
