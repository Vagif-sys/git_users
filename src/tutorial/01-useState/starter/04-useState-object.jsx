import { useState } from 'react';

const UseStateObject = () => {
  const [person,setPerson] = useState({
      name:'Peter',
      age:24,
      hobby:'read books'
  })

   const displayPerson = function(){
      /* setPerson({name:'jhon',age:28,hobby:'playing games'}) */
      setPerson({...person,age:65})
   }
  return <>
     
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h4>Enjoys: {person.hobby}</h4>

      <button type='button' onClick={displayPerson}>Show Jhon</button>
  </>;
};

export default UseStateObject;
