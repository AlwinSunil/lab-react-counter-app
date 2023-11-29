import { useState } from "react";
import "./App.css";

function App() {
  const [count, setcount] = useState(0);

  return (
    <div className="container">
      <h1>Counter App</h1>
      <h2 className="count">{count}</h2>
      <div className="buttons">
        <button onClick={() => setcount(count + 1)}>+</button>
        <button onClick={() => setcount(count - 1)}>-</button>
        <button onClick={() => setcount(0)}>Reset</button>
      </div>
    </div>
  );
}

export default App;
