import React from 'react'
const data =[
  {id:1,user: "ajay"},
  {id:2,user: 2},
  {id:3,user: 3},
  {id:4,user: 4},
  {id:5,user: 5},
  {id:6,user: 6},
]
export const ReactHook = ()=>{
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