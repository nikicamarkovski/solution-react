import React, { useContext, useEffect , useState} from 'react'
import UsersContext from '../../context/users/UsersContext'
export const Users = () => {
    const usersContext = useContext(UsersContext);
  
    const { users , getAllUsers , filtered , filterUsers} = usersContext;
    const [value , setValue] = useState("");
    useEffect( async ()=> {
        await getAllUsers()
       
      
      }, [])
      useEffect(()=> {

      }, [filterUsers])
      const handleOnChange = (e)=> {
          setValue(e.target.value)
          filterUsers(e.target.value)
      }
      console.log(filtered)
    return (
        <div className="container">
            <div className="input-field-login">
                <p className="input-label">filter</p>
                <input type="text" onChange={handleOnChange} value={value}/>
            </div>
            <div className="news">
                <div className="news-section">
               
              
            {
                
                filtered !== null &&
                filtered.map((user)=> (
                    <div className="news-section-half">
                    <div className="news-section-full-flex">
                      <div className="main-news">
                          <div className="img">
                          <img  className="avatar" src={user.avatar}/>
                          </div>
                    <p className="news-text">{user.first_name}</p>
                    <p className="news-text">{user.last_name}</p>
                    </div>
                    </div>
                    </div>
                ))
              
            
            }
          
            
            </div>
        </div>
        </div>
    )
}
