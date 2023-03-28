import React, {useRef} from 'react'

export const UseRef = () => {
    const refContainer = useRef(null);
    const handleSubmit = (e)=>{
        e.preventDefault();
        const name = refContainer.current.value;
        alert("hey " + name);
        console.log(name);
    }
  return (
    <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input ref={refContainer} />
        <button type='submit'>Submit</button>
    </form>
  )
}
