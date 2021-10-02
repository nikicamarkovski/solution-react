import {
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS
} from '../types'


export default (state , action) => {
    switch(action.type) {

        case USER_LOADED : 
           
            return {
                ...state ,
                ...action.payload,
                isAuthenticated : true ,
                user : action.payload
            }
        case LOGIN_SUCCESS :
            console.log(action.payload.token)
            localStorage.setItem('token' ,  action.payload.token)
            return {
                ...state,
                ...action.payload,
                isAuthenticated : true 
            }
        
        case LOGIN_FAIL :
        case LOGOUT : 
   
        localStorage.removeItem('token')
            
            return {
                ...state ,
                isAuthenticated : false ,
                user : null ,
                error : action.payload
            }  
        case CLEAR_ERRORS :
            return {
                ...state ,
                error : null
            }
    }
    
}