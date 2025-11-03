import React, { useContext } from "react";
import { CountContext } from "./CountContext";

const SetCount = () => {
  const { count } = useContext(CountContext); // get the current count
  return (
    <div>
      <h2>Current Count: {count}</h2>
    </div>
  );
};

export default SetCount;
