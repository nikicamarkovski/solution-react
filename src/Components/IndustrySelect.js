import React , {useState}from 'react'
import Select , {components}from 'react-select';


export const IndustrySelect = ({options , getIndustryState}) => {
    const [state, setState] = useState("");

    const handleOnChange = (e)=> {
   
        setState(e.value)
        getIndustryState(state);
    }
    return (
        <>         
            <Select 
            options={options}
            defaultValue={options[0]}
            onChange={handleOnChange}
          
       />
        </>

    )
}
