import React from 'react'

export const PersonDetail = () => {
  return (
    <div style={style.container}>
        <p>Hello</p>
        <button style={style.btn}>Logout</button>
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