//BACKEND posting
//break down this code and state the use of every line then
//aply it and find other alternatives to the code 

import axios from "axios"

app.post('path' , async (req ,res)=> {
    //the path should be inclussive of the crud method i.t.c "createExtensio_Name"
    const user = req.body 
    //receives data from http client request
     const newUser = new userModel(user)
    // parses the data received into a mongoose model
    await newUser.save()// save the data in the mongobase 
    res.json(user)
})



//CLIENT posting  
//using axios

const submit = ()=>{
    axios.post ('local path' , {data1 , data2})
    .then ((users)=>{
        console.log(users) 
    })
    
    .catch (err => console.log(err))
}

// react component
{ 
<input type= "text" onChange={(e)=> setName(e.target.value)}></input>
<input type= "text" onChange={(e)=> setName(e.target.value)}></input>
<button onClick ={submit}> create user</button>
}

/**Reevaluate the axios code to determine 
 * 1.how axios work fundamentaly and its rules
 * 2. using .then (not essential)
 * 3.  alternative to the code
 * 
 * For the react component 
 * -get to understand how the code works
 */

/**PRACTICE ON 
 *   the whole development prosses from express to react  */ 

