import React from 'react'

function withAuth(Component) {
  return function (props){
    console.log(props)
    let isLoggedIn = true
        if(isLoggedIn){
            return <Component {...props}/>
        }
        return <p>Please Logged </p>
  }
}
export default withAuth;