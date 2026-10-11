import { Product } from "./Product"

let books = [
    {
        title:"book1",
        price:123124
    }
]

function Body() {
  return (
    <div>
        {
            books.map(({title,price})=>{
                return <Product title={title} price={price}/>
            })
        }
    </div>
  )
}

export default Body
