import React from 'react'
import { Link } from 'react-router-dom'
import { PersonDetail } from './PersonDetail'

export const NavLink = () => {
  return (
    <div style={style.container}>
        <ul style={style.ul}>
            <li style={style.li}>
                <Link>Home</Link>
            </li>
            <li style={style.li}>
                <Link>About</Link>
            </li>
        </ul>
        <PersonDetail />
    </div>
  )
}

const style = {
    ul: {
        display: 'flex',
        alignItems: 'center',
        listStyle: 'none',
        paddingRight: 224
    },
    li:{
        paddingRight: 12
    },
    container:{
        display: 'flex',
        alignItems: 'center',
    }
}