import Body from "./components/Body";
import NewFooter, { Footer as FooterUpdate  } from "./components/Footer";// named import
import Navbar from "./components/Navbar";//default import
import { Product } from "./components/Product";
import Products from "./components/Products";

const user = {
  name: "Shyam",
  isLoggedIn: true
}
const products = [
  {
    title:"nike ka juta",
    price:5555
  },
   {
    title:"puma ka shoes",
    price:1111
  },
   {
    title:"Gold star",
    price:9999
  }
]

function App() {
 
return(
  <div>
     <Navbar user={user}/>
    <Products Products={products}>
      <p>Produst here</p>
      <a href="https://www.google.com">Go to Google</a>
    </Products>
    <Body/>
    <FooterUpdate/>


   {/* <Navbar></Navbar> */}
   {/* <NewFooter/> */}
  </div>
)
}

export default App;
