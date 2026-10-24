import { use, useContext } from "react";
import { UserContext } from "./main";
import Navbar from "./Component/Navbar";
import ChangeTheme from "./Component/ChangeTheme";

function GrandChild({ username }) {
  // React 18 old version
  // const value = useContext(UserContext);
  //Reat 19 version
  const value = use(UserContext);
  
  return (
    <div style={{ backgroundColor: "teal", padding: "20px" }}>
      <h1>GrandChild -{value}</h1>
    </div>
  );
}

function Child() {
  return (
    <div style={{ backgroundColor: "green", padding: "20px" }}>
      <h1>Child</h1>
      <GrandChild />
  
    </div>
  );
}

function Parent() {
  return (
    <div style={{ backgroundColor: "brown", padding: "20px" }}>
      <h1>Parent</h1>
      <Child />
    </div>
  );
}

function App() {
  return (
    <div>
      <Navbar/>
      <ChangeTheme/>
    
    </div>
  );
}

export default App;
