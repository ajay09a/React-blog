import React, {useState} from 'react'
import { data } from './data';

export const Form = () => {
    const [fname, setfname] = useState('');
    const [lname, setlname] = useState('')
    const [user, setuser] = useState(data)
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!fname && !lname) return;
        const name = fname+" "+lname;
        const fid = Date.now();
        const newUser = {id: fid, user: name}
        const updatedUsers = [...user,newUser]
        setuser(updatedUsers)
    }
  return (
    <>
    <form onSubmit={handleSubmit}>
        <label>First Name: </label>
        <input value={fname} fname={fname} onChange={(e)=>setfname(e.target.value)} /><br />
        <label>Last Name: </label>
        <input value={lname} lname={lname} onChange={(e)=>setlname(e.target.value)} /><br />
        <button type='submit'>Submit</button>
    </form>
    <div>
        <h2>Users</h2>
        {user.map((users)=>{
            return <p key={users.id}>{users.user}</p>
        })}
    </div>
    </>
  )
}
