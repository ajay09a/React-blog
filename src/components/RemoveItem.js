import React from 'react'
import { data } from './data'
export const RemoveItem = ()=>{
  const [first, setfirst] = React.useState(data)
  function handleDelete(id){
    // console.log(id);
    const fdata = first.filter((person)=>person.id !==id)
    setfirst(fdata);
  }
  function handleDeleteALl(){
    setfirst([]);
  }
  return(
    <div>
      {first.map((use)=>{
        return(
          <div>
            <h4>{use.user}</h4>
            <button onClick={()=>handleDelete(use.id)}>Remove</button>
          </div>
        )
      })}
      <button onClick={handleDeleteALl}>Remove all at once</button>
    </div>
  )
}