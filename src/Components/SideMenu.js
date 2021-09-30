import React, { useState , useEffect } from 'react'

export const SideMenu = ({sideMenu , getSideMenuState}) => {
    const [isActive , setIsActive] = useState(false)
    useEffect(()=> {
        
        setIsActive(sideMenu);
     
    })

    const handleOnClick = () => {
     setIsActive(false);
     console.log(isActive)
     getSideMenuState(isActive) 

    }
    return (
        <div className={`side-menu ${isActive ? "active" : ""}`}>
        <div className="content-holder">
        
            <div className="dept-logo"></div>
            <div className="close-icon" onClick={handleOnClick}>x</div>
            
                <ul className="dept-global">
                    <li className="landen">landen</li>
                    <li>GLOBAL</li>
                    <li> NEDERLAND</li>
                    <li>UNITED STATES</li>
                    <li>IRELAND</li>
                    <li>DEUTSCHLAND</li>
                    <li>SCHWEIZ</li>
             

                </ul>
             
                <ul className="nav-menu">
                    <li>HOME</li>
                    <li>WERK</li>
                    <li>OVER</li>
                    <li>DIENSTEN</li>
                    <li>PARTNERS</li>
                    <li>VACATURES</li>
                </ul>
                <ul className="social-networks">
                    <li>FACEBOOK</li>
                    <li>TWITTER</li>
                    <li>INSTAGRAM</li>
                    <li>LINKEDIN</li>
                </ul>
            </div>
            </div>

    )
}







