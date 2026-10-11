
function Navbar({user = {isLoggedIn:false,name:"Mohan"}}){
    const {isLoggedIn,name}= user
  return(
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Contect us</li>
      {/* conditional rendering */}
      <li>{isLoggedIn? name : "Login" }</li>
    </ul>
  )
}

export default Navbar;