import React, { useState } from 'react';
import { ThemeContext } from './ThemeContext';

const ThemeProvider = ({ children }) => {
  let name = "abc";
  const [count, setCount]= useState(0)
  let value = {count, setCount}
  return (
    <div>
      <ThemeContext.Provider value={value}>
        {children}
      </ThemeContext.Provider>
    </div>
  );
};

export default ThemeProvider;
