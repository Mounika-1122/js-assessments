
//Write a React component that handles form submission and validation.
import { useState } from 'react';
import React from 'react';
const App = () =>{
  const [data, setData] =useState({
    username: '',
    email: '',
    password:'',
    confirmPassword:'',
  })
  const {username, email, password, confirmPassword} =data;
  const changeHandler =e=>{
    setData({...data, [e.target.name]:e.target.value})
  }
  const submitHandler=e=>{
    e.preventDefault(); 
    if(username.length <= 5){
      alert("Username must be at leat 5 cahracters")
    }
    else if (password!==confirmPassword){
      alert("Passwords are  not matching");
    }
    else {
      console.log(data);
    }
    
   
  }
  return(
    <div>
      <center>
        <form onSubmit={submitHandler}>
          <input type="text" name="username" value={username} onChange={changeHandler}/> <br />
          <input type="email" name="email" value={email} onChange={changeHandler}/> <br />
          <input type="password" name="password" value={password} onChange={changeHandler}/> <br />
          <input type="password" name="confirmPassword" value={confirmPassword} onChange={changeHandler}/> <br />
          <input type="submit" name="submit"/> <br />
        </form>

      </center>
    </div>
  )
}

export default App;