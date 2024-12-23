import { useState , useEffect} from "react";

function List {
  const [todo , setTodo] = useState({})

  function addTask {
    const newTask = document.getElementById('task').value

    setTodo(...newTask , todo)

}
  //useEffect(addTask() , [])

  function removeTask {

  }



  return(

    <div>
      <div><input type="text" id="task"/>
      <button onClick={addTask}>add</button>
      
      </div>
      <div>
        <ul>
         {todo.map(newTask => (){
          <li key = {newTask}>{newTask}</li>
         })}
        </ul>

      </div>
      
    </div>
  );

}
export default List