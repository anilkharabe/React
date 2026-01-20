import { useState } from "react";
import Counter from "./Counter";
import POCuseRef from "./POCuseRef";
import POCuseMemo from './POCuseMemo'
import POCuseCallback from './POCuseCallback'
import ErrorBoundary from "../components/ErrorBoundary";

const POC = () => {
  // let counter = 0;

  const [counter, setCounter] = useState(0);

  return (
    <div className="my-7">
      <ErrorBoundary>
        <Counter />
      </ErrorBoundary>

      <h1 className="text-3xl">
        Remaining PoC: <br></br>
        <span>1. Memo :  done</span>  <br />
        <POCuseMemo />
        <POCuseCallback /> <br />
        4. Language Traslator(Homework) <br />
        5. Error Bourdaries <br />

      </h1>
      <POCuseRef />
    </div>
  );
};

export default POC;

// useState: it manages the state of the component
