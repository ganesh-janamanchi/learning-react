//              👇 helps to store a value and a method to update it
import React, { useState } from "react";
import "./App.css";

function App() {
  /*
    Rule to Remember: Never update any variable from the state directly.
                      OR
                      Never mutate the state of the variable directly.
    If you want to declare a state variable:
                                                      👇 put whatever default value you want for the variable to have
      const [variableName, setVariableName] = useState()
                            👆 we need a method to upate the variable
  */
  const [count, setCount] = useState(0);

  return (
    <div>
      <header>
        <h1>Counter App using State or Hooks</h1>
      </header>
      <h2>Current Value of the count is: {count} </h2>

      <button onClick={() => setCount(count + 1)}>Increment Counter</button>
      <button onClick={() => setCount(count - 1)}>Decrement Counter</button>
      <button onClick={() => setCount(0)}>Reset Counter</button>
    </div>
  );
}

export default App;
