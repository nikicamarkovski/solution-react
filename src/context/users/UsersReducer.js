import {
    GET_ALL_USERS,
    FILTER_USERS
} from '../types'


export default (state , action) => {
    switch(action.type) {
        case GET_ALL_USERS :
          
            return {
                ...state ,
                users: action.payload,
                filtered : action.payload
                
            }

            case FILTER_USERS : 
            return {
                ...state,
                filtered : state.users.filter((user)=>{
                    return user.first_name.includes(action.payload) || user.last_name.includes(action.payload)
                })
            }
       
    }
    
    
}