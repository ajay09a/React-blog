import React, {useState} from 'react'

export const MultipleReturn = () => {
    const [value, setvalue] = useState(true);

  return (
    <div>
        <button onClick={()=>{setvalue(!value)}}>toggle</button><br />
        <text>And operator: {value && <h2>hello from and operator</h2>}</text><br />
        <text>Or operator: {value || <h2>hello from or operator</h2>}</text><br />
        <text>Ternory operator: {value ? <h2>hello from Ternory operator</h2> : <h2>not true</h2>}</text><br />
    </div>
  )
}
