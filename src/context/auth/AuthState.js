import React , {useReducer} from 'react'
import axios from 'axios';
import jwt from 'jwt-decode'
import AuthContext from './AuthContext'; 
import authReducer from './AuthReducer'; 

import {
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS
}from '../types';
import setAuthToken from '../../Components/utils/setAuthToken';

const AuthState = props=>{
    let apiULR = "https://reqres.in/api"
  const initialState = {
      token: localStorage.getItem('token'),
      isAuthenticated : null,
      user:null,
      error:null
  }
  const [state , dispatch] = useReducer(authReducer , initialState);

  const loadUser = (formData) => {
      
    if(localStorage.token) {
        
      setAuthToken(localStorage.token)
  
      console.log(formData);
      dispatch({
        type: USER_LOADED,
        payload : formData
      })
   
    }
    

  }
   
  const login = async formData => {

        const config = {
          headers : {
            'Content-Type' : 'application/json'
          }
        }

      try {
          const res = await axios.post(`${apiULR}/login` , formData , config)
      
            
         
          dispatch({
            type : LOGIN_SUCCESS,
            payload : res.data
          })
          clearErrors()
          loadUser(formData)
        
      } catch (error) {
   
        if(error.response) {
        dispatch({
          type:LOGIN_FAIL,
          payload : error.response.data.error
        })
    }
      }
  }

  const clearErrors  = ()=> {
    dispatch({
      type : CLEAR_ERRORS
    })
  }

  const logout = () => {

    dispatch({
      type : LOGOUT
    })
  }
  return(

      <AuthContext.Provider
      value={{
         token: state.token,
         isAuthenticated : state.isAuthenticated,
         user : state.user,
         error: state.error,

         
          login,
         loadUser ,
         clearErrors,
         logout

      }}
      >
          {props.children}
      </AuthContext.Provider>
  )
}


export default AuthState