// usesate 
import { useState } from "react";

function Compj (){
   // eslint-disable-next-line no-unused-vars
   const [name , setName] = useState("brian")
   const Eves = ()=>{ 
    
    setName={"waves"}
    const welcome = `Welcome to this page, ${name}`;

   }
   
   
    return(
       <div> <p>my name is {name}</p>
   
        <button onClick={Eves}>click</button> 
        <p>{welcome}</p>
        </div>
       
    );
}

export default Compj

