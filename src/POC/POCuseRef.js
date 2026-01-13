import React, { useRef, useState } from "react";

const POCuseRef = () => {
  const [counter, setCounter] = useState(0); // counter = 0
  let letCounter = 0;   // letCounter = 0
  const refCounter = useRef(0);

//   refCounter = {
//     current: 0
//   }

  console.log('rerendering component')

  console.log('letCounter', letCounter)

  console.log('refCounter', refCounter)


  return (
    <div className="my-7">
      <div className="border bg-emerald-50">
        <h1 className="text-7xl">useRef PoC</h1>
        <div className="flex">
          <button
            className=" bg-red-300 p-1.5 m-4 rounded-lg"
            onClick={() => {
              setCounter(counter + 1);
            }}
          >
            State Variable Click me :
          </button>
          <h2 className="text-3xl m-4">{counter}</h2>
        </div>

        <div className="flex">
          <button
            className=" bg-red-300 p-1.5 m-4 rounded-lg"
            onClick={() => {
              letCounter += 1;
              console.log('letCounter', letCounter)
            }}
          >
            letCounter Click me :
          </button>
          <h2 className="text-3xl m-4">{letCounter}</h2>
        </div>

        <div className="flex">
          <button
            className=" bg-red-300 p-1.5 m-4 rounded-lg"
            onClick={() => {
              refCounter.current += 1;
              console.log('refCounter', refCounter)
            }}
          >
            refCounter Click me :
          </button>
          <h2 className="text-3xl m-4">{refCounter.current}</h2>
        </div>
      </div>

      

    </div>
  );
};

export default React.memo(POCuseRef);

