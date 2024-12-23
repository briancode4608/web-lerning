 

import { useState } from "react"

function MyComponents (){

    const [name , setName] = useState("");
    const [age , setAge] = useState(15);
    const [course , setCourse] = useState("");
  

    function handleNameChange(event){
        setName(event.target.value)

    }

    function handleAgeChange(event){
        setAge(event.target.value)

        
    }
    function handleCourseChange(event){
        setCourse(event.target.value)

    }



    return(
        <div>
            <input type="text" placeholder="enter your name" value={name} onChange={handleNameChange} />
            <p>{name}</p>

            <input type="number" value={age} onChange={handleAgeChange}/>
            <p>{age}</p>

            <select name="" id="" value={course} onChange={handleCourseChange}>
                <option value="">select a course</option>
                <option value="infomation tecnology">BIT</option>
                <option value="compuer science">BCS</option>
                <option value="infomation sciensce">BIS</option>
            </select>



        </div>

    );

}
export default MyComponents