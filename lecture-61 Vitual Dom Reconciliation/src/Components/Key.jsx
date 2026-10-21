import React, { useState } from "react";


function Product({ name }) {
  const [Quantity, SetQuantity] = useState(0);
  return (
    <div>
      <h3>{name}</h3>
      <button onClick={() => SetQuantity((prev) => prev + 1)}>
        "Quantity:{Quantity}
      </button>
    </div>
  );
}


function Key() {
  let [products, SetProducts] = useState([
   { id:1,name:"Mouse"},
   { id:2,name:"Keyboard"},
    {id:3, name:"Moniter"},
    {id:4,name:"HeadPhone"},
  ]);

  function removeFirstProduct(){
    SetProducts((prev)=> prev.slice(1))
}
  return (
    <>
      <ul>
        {products.map(({id , name}, i) => (
          <Product key={id} name={name} />
        ))}
      </ul>

      <button onClick={removeFirstProduct}>Remove first Products</button>
    </>
  );
}

export default Key;
