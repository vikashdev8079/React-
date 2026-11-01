import React from 'react'
import withAuth from '../utils/withAuth'

 function DashBoard({name,role}) {
  return (
    <div>
        <p>Name:{name}</p>
        <p>Role:{role}</p>
    </div>
  )
}

export const  AuthDashBoard = withAuth(DashBoard)