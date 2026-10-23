import React, { useState } from "react";
import { Link, Outlet, Route, Routes, useParams } from "react-router";
import NotFoundPage from "./Components/NotFoundPage";
import Login from "./Components/Login";
import Dasboard from "./Components/Dasboard";

const products =[
  {
    id:1,
    title:"Laptop"
  },
    {
    id:2,
    title:"Mobile"
  },
]
function Home() {
  return (
    <div>
       <h1>Home</h1>
       <div>
        {
          products.map((p)=> <section><Link to={`/product-page/${p.id}`}>{p.title}</Link></section>)
        }
       </div>
    </div>
  )
}

function ProductPage() {
  const {id} = useParams()
  const data = products.find((p)=>p.id === Number(id))

  return <div>
     <h1>Productpage</h1>
     {
      data? <p>{data.title}</p>:"No product found"
     }
  </div>
}

//  <ul>
//         <li onClick={() => setPage("home")}>Home</li>
//         <li onClick={() => setPage("productpage")}>ProductPage</li>
//         <li onClick={() => setPage("about")}>About</li>
//       </ul>
//       {page == "home" && <Home />}
//       {page == "productpage" && <ProductPage />}
//       {page == "about" && <About />}

function About() {
  return <h1>About</h1>;
}

function Navbar() {
  return (
    <>
      <ul>
        <Link to={"/"}>Home</Link><br />
        <Link to={"/product-page"}>ProductPage</Link><br />
        <Link to={"/login"}>Login</Link><br />
        <Link to={"/about"}>About</Link>
      </ul>
      <Outlet />
    </>
  );
}

function App() {
  const [page, setPage] = useState("home");
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route path="/" element={<Home />} />
        <Route path="/product-page/:id" element={<ProductPage />} />

        <Route path="/about" element={<About />} />
      </Route>
       <Route path="/contect-us" element={<h1>Contect us page</h1>} />
       <Route path="/login" element={<Login/>} />
       <Route path="/dashboard" element={<Dasboard/>}/>
       <Route path="/*" element={<NotFoundPage/>} />
    </Routes>
  );
}

export default App;
