import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const HeaderN = () => {
   const { count } = useContext(ThemeContext); // get the current count
  return (
    <div>
      <h2>Current Count: {count}</h2>
    </div>
  );
};

export default HeaderN;
