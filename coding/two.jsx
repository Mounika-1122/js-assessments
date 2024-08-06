// Implement a counter component that increments when a button is clicked.
import React, { useState } from 'react';




const Counter = () => {
  const [age,setAge]= useState(0);
  const increaseAge=()=>{

    setAge(age+1)
  }
  return(
    <div className="App">
      {age}
      <button onClick={increaseAge}>Increase Age</button>

    </div>
  )};
export default Counter;