import React, { useState , useRef , useEffect} from 'react'
import { SideMenu } from './SideMenu';

import{isMobile} from 'react-device-detect';


export const Header = () => {
    const [sideMenu , setSideMenu] = useState(false);
    const fieldRef = useRef(null);
    const getSideMenuState = (state) => {
    
        setSideMenu(false)
    }
    useEffect(()=> {
       
    })
    return (
      
        <header id="top" ref={fieldRef}>
           
            <div className="container">
         
       
                <div className={`header-content ${isMobile ? "sticky" :  ""}` } >
                    <div className="header-content-logo"></div>
                    <div className="header-content-menu">
                        <p className="menu-text">menu</p>
                        <p className="burger-menu" onClick={()=> setSideMenu(true)}></p>
                    </div>
                    
                </div>
          
                <div className="header-body">
                    <h1 className="header-title">work</h1>
                </div>
                <div className="header-button">
                    <button className="btn-black">VIEW CASE</button>
                </div>
            </div>
          
            <SideMenu sideMenu={sideMenu} getSideMenuState={getSideMenuState}/>
          
        </header>
     
    )
}
