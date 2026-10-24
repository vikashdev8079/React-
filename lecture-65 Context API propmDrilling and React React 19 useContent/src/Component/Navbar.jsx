import React, { use, useContext } from 'react'

import { ThemeContext } from '../Context/ThemeContext'

function Navbar() {
    // const value = useContext(UserContext)
    // console.log(value)

    const {them }= use(ThemeContext)
  return (
    <div  style={{ backgroundColor: "purple", padding: "20px" }}>
        <h1>Navbar</h1>
        <p>them-{them}</p>
    </div>
  )
}

export default Navbar