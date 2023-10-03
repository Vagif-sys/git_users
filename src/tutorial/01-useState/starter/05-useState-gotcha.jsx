import { useState } from "react";

const UseStateGotcha = () => {

  const [count,setCount] = useState(0)

  const clickHandler = function(){
     setTimeout(()=>{
         setCount((curState)=>{
             return curState + 1
         }) 
     },3000)
  }
  return <div>
      <h1>{count}</h1>
      <button type="button" onClick={clickHandler}>Increase</button>
  </div>
};

export default UseStateGotcha;
