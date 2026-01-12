import { useState } from "react";

const POC = () => {
  // let counter = 0;

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

              console.log("button clicked", counter);
            }}
          >
            Click me :
          </button>
          <h2 className="text-3xl m-4">{counter}</h2>
        </div>
      </div>

      <h1 className="text-3xl">
        Remaining PoC: 1. Memo <br />
        2. useMemo <br />
        3. useCallback <br />
        4. Language Traslator(Homework) <br />
        5. useRef <br />

      </h1>
    </div>
  );
};

export default POC;

// useState: it manages the state of the component
