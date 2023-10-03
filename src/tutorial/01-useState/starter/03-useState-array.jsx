import { useState } from "react";
import {data} from '../../../data'
const UseStateArray = () => {

const [people,setPeople] = useState(data)

const removeHandler = function(id){
  const newPeople = people.filter((person)=>person.id !== id)
  setPeople(newPeople)
}

const clearAllItems = function(){
   setPeople([])
}
  return <div>
        {people.map((person)=>{
          const {id, name} = person
           return <div key={id}>
            <h4>{name}</h4>
             <button type='button' onClick={()=>removeHandler(id)}>Remove</button>
            </div>
           
        })}

        <button type='button' onClick={()=>clearAllItems([])} className="btn">Clear All</button>
  </div>
};

export default UseStateArray;
