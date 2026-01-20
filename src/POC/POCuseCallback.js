import { useState, useCallback } from "react";
import Child from "./Child";

const POCuseCallback = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1);

  const testing =useCallback(() => {
    console.log("testing this function");
  },[setCount2]);

  const counter2 = () => {
    setCount2(count2 + 1)
  }

  return (
    <div className="my-7">
      <div className="border bg-emerald-50">
        <h1 className="text-7xl">useCallback PoC</h1>
        <>
          <button className="bg-amber-700" onClick={() => setCount(count + 1)}>
            Increment Count ({count})
          </button>
            <br></br>
          <button className="bg-amber-700" onClick={counter2}>
            Increment Count - 2({count2})
          </button>
          <Child count2={count2} testing={testing}/>
        </>
      </div>
    </div>
  );
};

export default POCuseCallback;
