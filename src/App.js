import React from "react";
import { CountProvider } from "./CountContext";
import SetCount from "./SetCount";
import IncreaseCount from "./IncreaseCount";

function App() {
  return (
    <CountProvider>
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <h1>useContext Counter Example</h1>
        <SetCount />
        <IncreaseCount />
      </div>
    </CountProvider>
  );
}

export default App;
