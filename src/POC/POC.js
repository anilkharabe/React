import { useState } from "react";
import Counter from "./Counter";
import POCuseRef from "./POCuseRef";

const POC = () => {
  // let counter = 0;

  const [counter, setCounter] = useState(0);

  return (
    <div className="my-7">
      <Counter />

      <h1 className="text-3xl">
        Remaining PoC: 1. Memo <br />
        2. useMemo <br />
        3. useCallback <br />
        4. Language Traslator(Homework) <br />

      </h1>
      <POCuseRef />
    </div>
  );
};

export default POC;

// useState: it manages the state of the component
