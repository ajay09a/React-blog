import React, {useState, createContext} from 'react'
import { NavLink } from './NavLink'

export const NavbarContext = createContext();

export const Navbar2 = () => {
    const [user, setuser] = useState({name: 'bob'});
    const logout = ()=>{
        setuser(null);
    }
  return (
    <NavbarContext.Provider value={{user, logout}}>
        <div style={style.nav}>
            <h2>Context API</h2>
            <NavLink />
        </div>
    </NavbarContext.Provider>
  )
}

const style = {
    nav:{
        display: 'flex',
        background: 'grey'
    }
}