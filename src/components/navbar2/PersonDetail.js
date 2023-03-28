import React, { useContext } from 'react'
import { NavbarContext } from './Navbar2'

export const PersonDetail = () => {
    const {user, logout} = useContext(NavbarContext);
  return (
    <div style={style.container}>
        {user?(
            <>
                <p>Hello {user?.name?.toUpperCase()}</p>
                <button style={style.btn} onClick={logout}>Logout</button>
            </>
        ):
        (
            <>
                <p>please Login</p>
            </>
        )}
    </div>
  )
}

const style = {
    container:{
        display: 'flex'
    },
    btn: {
        width: 70,
        height: 29,
        borderRadius: 11,
        background: '#30a549',
        marginTop: 14,
        marginLeft: 16,
        cursor: 'pointer'
    }
}