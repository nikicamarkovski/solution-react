import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import {news} from '../data';
export const ShowMe = ({getSelectState}) => {
    const [state, setState] = useState({industry:"" , category:""})
    const [newsData , setNewsData] = useState(news);
    const options = [
        { value: 'all work', label: 'all work' , name:"category"},
        { value: 'category1', label: 'category1' , name:"category"},
        { value: 'category2', label: 'category2' , name:"category"},
        { value: 'category3', label: 'category3' , name:"category"}
      ]
      const option2 = [
        { value: 'all industries', label: 'all industries' , name:"industry"},
        { value: 'industry2', label: 'industry2' , name:"industry"},
        { value: 'industry3', label: 'industry3' , name:"industry" }
      ]
  
      const handleOnChange = (e) => {
     
          setState({ ...state , [e.name]:e.value})
         
        
        if( e.value !=="all work" ) {
         let  filteredData = newsData.filter((news)=> {
            console.log(e.label)
            return news.category == e.label
          })
        
         
          getSelectState(filteredData);
      }else {
        getSelectState(news);
      }
    }
    return (
   
        <div className="show-me">
        <div className="filter-content">
        <p>Show me</p>
            <div className="container-select">
              
                <Select
                options={options}
                name="industry"
                onChange={handleOnChange}
                />
            </div>
            </div>
            <div className="filter-content">
            <p>in</p>
            <div className="container-select">
             
                <Select
                options={option2}
                name="category"
                onChange={handleOnChange}

                />
                </div>
            </div>
        </div>
   
    )
}
