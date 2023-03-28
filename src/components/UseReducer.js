import React, {useReducer} from 'react'
import { data } from './data'

const defaultReducer = {
    people: data,
}
const reducer = (state, action)=>{
    if(action.type === 'CLEAR_LIST'){
        return {...state, people:[]}
    }
    else if(action.type === 'RESET_LIST'){
        return {...state, people:data}
    }
}

export const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, defaultReducer)
  function handleDelete(id){
    // console.log(id);
    // const fdata = first.filter((person)=>person.id !==id)
    // setfirst(fdata);
  }
  function handleDeleteALl(){
    dispatch({type: 'CLEAR_LIST'});
    // setfirst([]);
  }
  function handleReset(){
    dispatch({type: 'RESET_LIST'})
  }
  return (
    <div>
      {state.people.map((use)=>{
        return(
          <div key={use.id}>
            <h4>{use.user}</h4>
            <button onClick={()=>handleDelete(use.id)}>Remove</button>
          </div>
        )
      })}
      {state.people < 1?(
        <button onClick={handleReset}>Reset</button>
      ):(
        <button onClick={handleDeleteALl}>Remove all at once</button>
      )}
    </div>
  )
}
