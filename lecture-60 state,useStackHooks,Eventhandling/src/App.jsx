import { useState } from 'react';
import Counter from './Components/Counter'
import Navbar from './Components/Navbar';
import Todo from './Components/Todo';


function App(){
  const [value,setValue]= useState(0)
  function printCountValue(val){
 setValue(val)
    
  }
  return(
    <div>
      {/* <Navbar count={value}/>
     <Counter printCountValue={printCountValue}/> */}
     <Todo/>
     {/* <Counter/> */}

    </div>
  )
}

export default App;

