
import { useState  } from "react";


function TodoApp (){


    const [Task , setTask] = useState(['task1', 'task2'])

    const [inputValue , setInputValue] = useState('');

//handling change in the input field

const handleInputChange = (event) => {
    setInputValue(event.target.inputValue)
}

// addind task
const handleTaaskChange= () => {
    
    const newTask = "newTask";
    setTask([...Task , newTask])



}

// removing task
const handleRemoveTask = (indexToRemove) => {
   const updatedItems = Task.filter((_, index)=> index !==indexToRemove );
    setTask(updatedItems);
}

    return(

        <div>
            <h1>TO DO APP</h1>
            <input 
            type="text"
            placeholder="enter your task"
            value={inputValue}
            onChange={handleInputChange} />
            <button onClick={handleTaaskChange}>add task</button>
            <ul>
                {Task.map((task, index) => (
                    <li
                    key={index}>{task}
                    
                    <button onClick={() => handleRemoveTask(index)}> delete</button></li>
                    
                      ))}

            </ul>
        </div>
    );

}

export default TodoApp