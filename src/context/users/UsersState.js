import React , {useReducer} from 'react'
import axios from 'axios';

import UsersContext from './UsersContext'; 
import usersReducer from './UsersReducer'; 

import {
  FILTER_USERS,
 GET_ALL_USERS
}from '../types';


const UsersState = props=>{
    let apiULR = "https://reqres.in/api"
  const initialState = {
        users:null,
        filtered :null
  }
  const [state , dispatch] = useReducer(usersReducer , initialState);

  const getAllUsers = async (page) => {
      try {
        const allUsers = await axios.get(`${apiULR}/users?page=${page}`);
        console.log(allUsers.data.data)
        dispatch({
          type:GET_ALL_USERS,
          payload:allUsers.data.data
        })
          
      } catch (error) {
            console.log(error)
      }
      
  }
  const filterUsers = (value) => {
      dispatch({
        type:FILTER_USERS,
        payload:value
      })
  }
  return(

      <UsersContext.Provider
      value={{
        users : state.users,
        filtered : state.filtered,
        getAllUsers,
        filterUsers

      }}
      >
          {props.children}
      </UsersContext.Provider>
  )
}


export default UsersState