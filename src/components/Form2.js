import React, {useState} from 'react'

export const Form2 = () => {
    const [user, setuser] = useState({
        name: '',
        email: '',
        password: '',
        gender: 'male',
        checked: false
    });
    const handleSubmit = (e)=>{
        e.preventDefault();
        alert("form submitted... see it in console")
        console.log(user);
    }
    const handleChange = (e)=>{
        setuser({...user, [e.target.name]:e.target.value, checked: e.target.checked})
    }
  return (
    <>
    <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input value={user.name} onChange={handleChange} name="name" /><br />
        <label>Email: </label>
        <input value={user.email} onChange={handleChange} name="email" /><br />
        <label>Password: </label>
        <input value={user.password} onChange={handleChange} name="password" /><br />
        <label>Gender: </label>
        <select name='gender' value={user.gender} onChange={handleChange}>
            <option>male</option>
            <option>female</option>
        </select><br />
        <label>Married</label>
        <input type={'checkbox'} checked={user.checked} onChange={handleChange} name="checked" /><br />
        <button type='submit'>Submit</button>
    </form>
    </>
  )
}
