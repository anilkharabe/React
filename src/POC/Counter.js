import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="my-7">
      <div className="border bg-emerald-50">
        <h1 className="text-7xl">useState PoC</h1>
        <div className="flex">
          <button
            className=" bg-red-300 p-1.5 m-4 rounded-lg"
            onClick={() => {
              setCounter(counter + 1);
            }}
          >
            Click me :
          </button>
          <h2 className="text-3xl m-4">{counter}</h2>
        </div>
      </div>

    </div>
  );
};

export default React.memo(Counter);

// useState: it manages the state of the component
