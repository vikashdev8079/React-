import React, { memo } from 'react'

const ChildComponent = memo(function({printHello}) {
   
  return (
    <>
    <div>ChildComponent</div>
     <button onClick={printHello}>Print Hello in console</button>
    </>
  ) 
  
})

export default ChildComponent