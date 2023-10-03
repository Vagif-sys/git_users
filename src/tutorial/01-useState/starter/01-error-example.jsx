import {useState} from 'react'

const ErrorExample = () => {

const [count,setCount] = useState(0)

const clickHandler = function(){

   setCount(count + 1)

}

  return(
    <div>
      <h2>{count}</h2>
     <button type='button' onClick={clickHandler} className='btn'>Click Here</button>
    </div>
     
  );
};

export default ErrorExample;
