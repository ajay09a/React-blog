import React, {useState} from 'react'

export const Count = () => {
    const [first, setfirst] = useState(0);
    function increase(){
        setfirst(first+1);
    }
    function decrease(){
        setfirst(first-1);
    }
  return (
    <div>
        <h2>{first}</h2>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
    </div>
  )
}
