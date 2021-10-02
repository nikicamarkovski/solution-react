import React, { useContext, useEffect } from 'react'
import UsersContext from '../../context/users/UsersContext'
export const Users = () => {
    const usersContext = useContext(UsersContext);
    console.log(usersContext);
    const { users , getAllUsers} = usersContext;
    
    useEffect( async ()=> {
        await getAllUsers()
       
        console.log(users)
      }, [])
    return (
        <div className="container">
            <div className="news">
                <div className="news-section">
               
              
            {
                users !== null &&
                users.map((user)=> (
                    <div className="news-section-half">
                    <div className="news-section-full-flex">
                      <div className="main-news">
                          <div className="img">
                          <img  className="avatar" src={user.avatar}/>
                          </div>
                    <p>{user.first_name}</p>
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
