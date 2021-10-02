import React, { useState , useRef , useEffect, useContext} from 'react'
import { SideMenu } from './SideMenu';
import {NavLink , useLocation} from 'react-router-dom'
import{isMobile} from 'react-device-detect';

import AuthContext from '../context/auth/AuthContext'

export const Header = () => {
    const authContext = useContext(AuthContext);
    const {login , error , isAuthenticated , user , loadUser , logout} = authContext;
    const [sideMenu , setSideMenu] = useState(false);
    const[menu , setMenu] = useState("")
    const fieldRef = useRef(null);
    const location = useLocation();

    const getSideMenuState = (state) => {
    
        setSideMenu(false)

    }
    const getActiveMenu = (menu) => {
        setMenu(menu)
    }
    const handleLogout = () => {
        logout()
    }
   
    return (
      
        <header id="top" ref={fieldRef}>
           
            <div className="container">
         
        
                <div className={`header-content ${isMobile ? "sticky" :  ""}` } >
                    <div className="header-content-logo"></div>
                    <div className="header-content-menu">
                        {
                            user !== null && <p className="menu-text">{user.email}</p> 
                        }
               <>
                            {!isAuthenticated ?
                             location.pathname !== "/login" ?
                            <NavLink onClick={()=>setMenu("Login")} className="menu-text" to="login">{isAuthenticated ? "logout" : "login"}</NavLink> 
                            : ""
                            : <p className="menu-text" onClick={handleLogout}>Logout</p>
                        }
                        </>
                    
                   
                        <p className="menu-text">menu</p>
                        <p className="burger-menu" onClick={()=> setSideMenu(true)}></p>
                    </div>
                    
                </div>
          
                <div className="header-body">
                    <h1 className="header-title">{menu}</h1>
                </div>
                <div className="header-button">
                    <button className="btn-black">VIEW CASE</button>
                </div>
            </div>
          
            <SideMenu sideMenu={sideMenu} getSideMenuState={getSideMenuState} getActiveMenu={getActiveMenu}/>
          
        </header>
     
    )
}
