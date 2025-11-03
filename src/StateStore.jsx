import React, { useState, useRef, useEffect } from "react";

const StateStore = () => {
  const [number, setNumber] = useState(0);
  const prevNumber = useRef(0); 
  useEffect(() => {
    prevNumber.current = number;
  }, [number]);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Current Value: {number}</h2>
      <h3>Previous Value: {prevNumber.current}</h3>

      <button onClick={() => setNumber(number + 1)}>Increase Value</button>
      <button onClick={() => setNumber(number > 0 ? number - 1 : number)}>
        Decrease by One
      </button>
      <button onClick={() => setNumber(0)}>Set to Zero</button>
    </div>
  );
};

export default StateStore;
