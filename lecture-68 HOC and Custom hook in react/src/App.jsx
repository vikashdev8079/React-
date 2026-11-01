import React from "react";
import NavBar from "./component/NavBar";
import { Route, Routes } from "react-router";
import Home from "./component/Home";
import { AuthDashBoard } from "./component/DashBoard";
import { AuthProfile } from "./component/Profile";

function App() {

  let user ={
     name:"Sohan",
     role:"Developer"
  }
 
  return (
    <div>
      {/* <DashBoard/> */}
      {/* <AuthDashBoard/> */}
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<AuthDashBoard name={"Satyam"} role={"Designer"}  />} />
        <Route path="/profile" element={<AuthProfile {...user}/>} />
        <Route path="/*" element={<p>Page not Found</p>} />
      </Routes>
    </div>
  );
}

export default App;
