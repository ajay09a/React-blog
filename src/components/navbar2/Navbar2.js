import React from 'react'
import { NavLink } from './NavLink'

export const Navbar2 = () => {
  return (
    <div style={style.nav}>
        <h2>Context API</h2>
        <NavLink />
    </div>
  )
}

const style = {
    nav:{
        display: 'flex',
        background: 'grey'
    }
}