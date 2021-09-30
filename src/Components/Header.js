import React, { useState } from 'react'
import { SideMenu } from './SideMenu';
export const Header = () => {
    const [sideMenu , setSideMenu] = useState(false);
    const getSideMenuState = (state) => {
        console.log(sideMenu)
        setSideMenu(false)
    }
    return (
        <header>
            <div className="container">
                <div className="header-content">
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
