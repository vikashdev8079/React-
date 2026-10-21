import { useState } from "react";
import Key from "./Components/Key";

function Counter() {
  let [count, setCount] = useState(0);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Incremet</button>
    </>
  );
}

const App = () => {
  const [changetag, setChangetag] = useState(true);
  return (
    <div>
      {/* <h2>hii</h2>
      <h3>hello</h3> */}
      {/* Rule(1) */}

      {/* {changetag ? (
        <div>
          <Counter />
        </div>
      ) : (
        <section>
          <Counter />
        </section>
      )} */}

      {/* Rule(2) */}
      {/* <div className={changetag ? "active":"inActive"}>
      <Counter/>
    </div> */}

      {/* Rule(3) */}
      {/* {changetag ? <Counter /> : <Counter />} */}
        {/* {changetag ? <Counter key={1}/> : <Counter key={2}/>}

      <button onClick={() => setChangetag((prev) => !prev)}>Change Tag</button> */}
      <Key/>
    </div>
  );
};

export default App;
