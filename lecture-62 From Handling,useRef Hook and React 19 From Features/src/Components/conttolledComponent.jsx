import React, { useState } from "react";

function ControlledComponent() {
  // const [name, setName] = useState("");
  // const [email, SetEmail] = useState("");
  // const [password, setPassword] = useState("");

  const [form, setForm] = useState({ name: "Mohan", email: "mohan@gmail.com", password: "11111111" });

  function signUp(e) {
    e.preventDefault();
    console.log(form)
  }

  function handleInput(e) {
    // let value = e.target.value;
    // let name = e.target.name
   
    const {value,name} = e.target;
    setForm((prev)=>({...prev,[name] : value}))
    
  }

  return (
    <div>
      <h1>From in React( Controlled component)</h1>
      <form action="" onSubmit={signUp}>
        <label htmlFor="name">Name : </label>
        <input value={form.name} type="text" id="name" name="name" onInput={handleInput} />
        <br />
        <label htmlFor="email">Email : </label>
        <input value={form.email} type="text" id="email" name="email" onInput={handleInput} />
        <br />
        <label htmlFor="password">Password : </label>
        <input type="password" id="name" name="password"onInput={handleInput} />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default ControlledComponent;
