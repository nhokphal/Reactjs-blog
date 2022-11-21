import React, { useState } from 'react'

const Person = (props) => {

    const {showPage, setShowPage} = useState(false);


  return (
    <div>
         showPage 
        <div>
        <p>
        I am {props.name} age {props.age}
        </p>
        <p>
            {props.children}
        </p>
        </div>
     
    </div>
    
  )
}

export default Person