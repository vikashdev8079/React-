import { Product } from "./Product"


function Products({Products = [] , children}) {
    console.log(children);
  return(
       <div style={{backgroundColor : "white", color: "black"}}>
  {
    Products.map(({title , price},i)=>{
      return <Product key={i} title={title} price={price} />
    })
  }
  {children}
    
   </div>

  )
}

export default Products