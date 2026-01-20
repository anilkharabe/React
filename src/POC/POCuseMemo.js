import { useState, useMemo } from "react";

const POCuseMemo = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(5);

  const result = useMemo(() => {
    console.log("Calculating square...");
    for (let i = 0; i < 1000000000; i++) {} 
    return number * number;
  },[number]);

  return (
    <div className="my-7">
      <div className="border bg-emerald-50">
        <h1 className="text-7xl">useMemo PoC</h1>

        <>
          <h2>Square: {result}</h2>

          <button className="bg-amber-700" onClick={() => setNumber(number + 1)}>Change Number</button> {number} <br/>


          <button className="bg-amber-700" onClick={() => setCount(count + 1)}>
            Increment Count ({count})
          </button>
        </>
      </div>
    </div>
  );
};

export default POCuseMemo;
