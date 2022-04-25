import React, { useState, useEffect } from "react";

const ShowHide = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <button
        className="btn"
        onClick={() => {
          setShow(!show);
        }}
      >
        show/hide
      </button>
      {show && <Item></Item>}
    </>
  );
};

const Item = () => {
  const [size, setsize] = useState(window.innerWidth);

  const changeSize = () => {
    setsize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", changeSize);
    return () => {
      window.removeEventListener("resize", changeSize);
    };
  }, []);

  return (
    <div style={{ marginTop: "2.5rem" }}>
      <h1>Window</h1>
      <h2>{size} px</h2>
    </div>
  );
};

export default ShowHide;
