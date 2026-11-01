import React from 'react'
import {Link} from 'react-router'
function NavBar() {
  return (
    <div>
        <Link to={"/"}>Home</Link>
        <br />
        <Link to={"/dashboard"}>DashBoard</Link>
        <br />
        <Link to={'/profile'}>Profile</Link>

    </div>
  )
}

export default NavBar