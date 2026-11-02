import React, { useCallback, useMemo, useState } from "react";
import ChildComponent from "./component/ChildComponent";

function calculateSum() {
  let sum = 0;
  for (let i = 0; i < 1000000000; i++) {
    sum += i;
  }
  return sum;
}

function App() {
  const [Count, setCount] = useState(0);
  const value = useMemo(() => {
  
    return calculateSum();
  }, []);

  // function printHello(){ //re-create on every re-render with new reference
  //   console.log("hye heloo jii...")
  // }
  const memoizedPrintHello = useCallback(() => {
    console.log("hye heloo jii...");
  }, []);

  let obj = {
    Count: 50,
    printHello: memoizedPrintHello,
  };

  return (
    <div>
      <p>value:{Count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>click</button>
      <p>Toatal:{value}</p>
      {/* <ChildComponent Count={Count}/> */}
      <ChildComponent {...obj} />
    </div>
  );
}

export default App;
