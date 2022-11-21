import React, { useState } from 'react'
import Person from './Person'

const Props = (props) => { 
   const randomName = [
    {
        name: "phal",
    },
    {
        name: "jack"
    }
   ]
   const [names, setName ] = useState(0)

  const SwitchHandler = e => {
    
    const len = randomName.length;
    return setName(Math.floor(Math.random() * len));
  }


  return (
    <div>
      <h1>Welcome to react</h1>
        <h1>simple props</h1>
      <Person name="phal" age={Math.floor(Math.random() * 30)}/>
      <Person name="phal" age={Math.floor(Math.random() * 30)}/>
      <h1>Random name here from PHAL AND JACK</h1>
      <Person name={randomName[names].name} age={Math.floor(Math.random() * 30)}/>
      <h1> access props by children</h1>
      <Person name= "phal" age={Math.floor(Math.random() * 20)}>i am Children props</Person>
      <button onClick={SwitchHandler}>Switch me</button>


    </div>
  )
}

export default Props
