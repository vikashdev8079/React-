import { useState } from "react";

function Counter({ printCountValue }) {
  //    const result = useState(0)
  //    const value =result[0]
  //    const setValue=result[1]
  let [value, setValue] = useState(0);

  function increment() {
    //direct value milega
    // setValue(value + 1)
    // setValue(value + 1)
    // setValue(value + 1)

    //dynamic vlaue milega
    // setValue((prev)=> prev+1)
    // setValue((prev)=> prev+1)
    setValue((prev) => prev + 1);
    printCountValue(++value);

    // printCountValue(value);
    //  setValue(value++)
    //  setValue(value++)
    //  setValue(value++)

    // setValue(++value)/
    // setValue(++value)
    // setValue(++value)
  }
  function dicrement() {
    // setValue(value--)
    setValue((prev) => prev - 1);
    printCountValue(--value)
  }

  return (
    <div>
      <h1>counter</h1>
      <button onClick={increment}>+</button>
      <p>{value}</p>
      <button onClick={dicrement}>-</button>
    </div>
  );
}

export default Counter;
