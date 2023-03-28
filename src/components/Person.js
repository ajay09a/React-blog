import React from 'react'

export const Person = (user) => {
    const avatar = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYaWJibmdt2yjA7hZpUdpPpL0HneTxiVxtAg&usqp=CAU"
    const nickname = user.nickname || "NA";
    const img = user.image?.[0]?.small?.url ?? avatar;
  return (
    <div style={style.container}>
        <img src={img} alt='user' style={style.image} />
        <div style={style.profile}>
            <p>Name: {user.user}<br />
            NickName: {nickname}</p>
        </div>
    </div>
  )
}

const style = {
    image: {
        width: 70,
        height: 70,
        borderRadius: 50
    },
    container: {
        background: 'grey',
        marginBottom: 10,
        paddingLeft: 20,
        paddingTop: 10,
        paddingBottom: 7,
        display: 'flex'
    },
    profile: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 30
    }
}