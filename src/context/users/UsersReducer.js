import {
    GET_ALL_USERS
} from '../types'


export default (state , action) => {
    switch(action.type) {
        case GET_ALL_USERS :
          
            return {
                ...state ,
                users: action.payload
            }
       
    }
    
}