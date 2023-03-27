import React from 'react'
import { Person } from './Person'
import { people } from './data'
export const ListPeople = () => {
  return (
    <div>{people.map((person)=>{
        return < Person key={person.user} {...person} />
    })}</div>
  )
}
