let colors = ["red", "green", "blue", "pink", "black"];

let user = {
  name: "shyam",
  isOnline: false,
};

function printName() {
  console.log(user.name);

  
}
function App() {
  return (
    <>
      <div>Radhekrishn</div>
      <div>hye</div>
      <p>{5 + 6}</p>
      <p>5 + 6</p>
      <ul>
        {colors.map((color) => {
          return <li>{color}</li>;
        })}
      </ul>

      <p>
        {user.isOnline ? `${user.name} is online` : `${user.name} is offline`}
      </p>

      <button className="" onClick={printName}>Click me</button>
      <img src="" alt="" />
      <br />
    </>
  );
}

export default App;
