import React, { useState } from 'react'
import Select , {components}from 'react-select';


export const CategorySelect = ({options , getCategoryState}) => {
    const [state, setState] = useState("");

    const handleOnChange = (e)=> {
   
        setState(e.value)
        // getCategoryState(state)
      
    }
    return (
       <>
       <Select 
           
      
       />
     
       </>
    )
}
