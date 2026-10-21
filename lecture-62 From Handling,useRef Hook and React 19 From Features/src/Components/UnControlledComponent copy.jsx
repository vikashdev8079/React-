
function UnControlledComponent() {

  
  function signUp(e) {
    e.preventDefault();
    const formData = new FormData(e.target)
    console.log(Object.fromEntries(formData))
  }


  return (
    <div>
      <h1>From in React(UnControlledComponent)</h1>
      <form action="" onSubmit={signUp}>
        <label htmlFor="name">Name : </label>
        <input defaultValue="Shaym" type="text" id="name" name="name"/>
        <br />
        <label htmlFor="email">Email : </label>
        <input  defaultValue="shyam@gmail.com"type="text" id="email" name="email" />
        <br />
        <label htmlFor="password">Password : </label>
        <input type="password" id="name" name="password" />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default UnControlledComponent;
