import React, { useContext } from "react";
import { CountContext } from "./CountContext";

const IncreaseCount = () => {
  const { count, setCount } = useContext(CountContext); // get count + setter

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
  );
};

export default IncreaseCount;
