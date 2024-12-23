import { useState } from "react"

function Counter(){
    const [counter , setcount] = useState(0);

    const increament =()=>{
          setcount(counter +1);

    }
    const decreament =()=>{
         setcount(counter-1);
    }
    const reset =()=>{
        setcount(0);

    }


    return(
      <div>
        <p>{counter}</p>
        <button onClick={increament}>increase</button>
        <button onClick={decreament}>decrease</button>
        <button onClick={reset}>reset</button>
      </div>
        

    );
}

export default Counter