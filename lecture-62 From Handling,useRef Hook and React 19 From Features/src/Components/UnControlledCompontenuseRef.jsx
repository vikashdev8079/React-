import { useRef } from "react";

function UnControlledComponentuseRef() {

    const nameRef = useRef(null) 
   

  
  function signUp(e) {
    e.preventDefault();
    const formData = new FormData(e.target)
    console.log(Object.fromEntries(formData))
    //  console.log(nameRef.current.value)
    nameRef.current.style.color = "red"
    let nameTag1 = nameRef.current
    let nameTag2 =document.querySelector("#name2")
    console.log(nameTag1 === nameTag2)
  }


  return (
    <div>
      <h1>From in React(UnControlledComponent - useRef)</h1>
      <form action="" onSubmit={signUp}>
        <label htmlFor="name2">Name : </label>
        <input  ref={nameRef}  type="text" id="name2" name="name"/>
        <br />
        <label htmlFor="email">Email : </label>
        <input type="text" id="email" name="email" />
        <br />
        <label htmlFor="password">Password : </label>
        <input type="password" id="name" name="password" />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default UnControlledComponentuseRef;
