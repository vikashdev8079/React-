import { useEffect, useState } from "react";
import axios from "axios";
function Timer() {
  useEffect(() => {
    const id = setInterval(() => {
      console.log("Timer");
    }, 1000);

    return () => {
      console.log("timer clean up");
      clearInterval(id);
    };
  }, []);

  return (
    <div>
      <h2>Timer Component</h2>
    </div>
  );
}
function App() {
  const [productCount, setproductCount] = useState(0);
  const [product, setproduct] = useState([]);
  const [name, setName] = useState("");
  const [showTimer, setShowTimer] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //     fetch("https://dummyjson.com/product")
    // .then((res) => res.json())
    // .then((data) => {
    //   setproductCount(data.total);
    //   setproduct(data.products)
    // });

    async function getProduct(params) {
      // let res = await fetch("https://dummyjson.com/product");
      // let data = await res.json();
      let {data} = await axios.get("https://dummyjson.com/product");
      setproductCount(data.total);
      setproduct(data.products);
      setIsLoading(false)
    }

    getProduct();
    return function () {
      console.log("cleanup function");
    };
  }, [name]);


// if(isLoading){
//   return <div class="loader"></div>

// }

  return (
    <div>
      {showTimer && <Timer />}
      <button onClick={() => setShowTimer((prev) => !prev)}>
        Toggel Timer Component
      </button>
      <br />
      product-{productCount}
      <br />
      <input
        type="text"
        name=""
        id=""
        onInput={(e) => setName(e.target.value)}
      />
  
      <p>{name}</p>
      <ul>
        { isLoading ?  <div className="loader"></div> : product.map((p) => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
