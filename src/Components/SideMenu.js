import React, { useState , useEffect, useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { IconDropdown } from './Icons/IconDropdown';
import AuthContext from '../context/auth/AuthContext'
export const SideMenu = ({sideMenu , getSideMenuState , getActiveMenu}) => {
    const authContext = useContext(AuthContext);
    const {  isAuthenticated  } = authContext;
    const [isActive , setIsActive] = useState(false);
    const [menu , setMenu] = useState("")
    useEffect(()=> {
        
        setIsActive(sideMenu);
     
    })
    const handleMenu = (e) => {
        setMenu(e.target.getAttribute("data-id"));
        console.log(e.target)
        console.log(menu)
        getActiveMenu(e.target.getAttribute("data-id"));
    }
    
    const handleOnClick = () => {
     setIsActive(false);
     console.log(isActive)
     getSideMenuState(menu) 

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
                    <NavLink to="/home" data-id={"HOME"} className={`${menu === "HOME" && "active-menu"}`} onClick={handleMenu}>{ menu==="HOME"  && <IconDropdown color={"white"} />}HOME</NavLink>
                    <NavLink to="/werk" data-id={"WERK"} className={`${menu === "WERK" && "active-menu"}`} onClick={handleMenu}> { menu==="WERK"  && <IconDropdown color={"white"} />}WERK</NavLink>
                    <NavLink to="/over" data-id={"OVER"} className={`${menu === "OVER" && "active-menu"}`} onClick={handleMenu}> { menu==="OVER"  && <IconDropdown color={"white"} />}OVER</NavLink>
                    <NavLink to="/diensten" data-id={"DIENSTEN"}  className={`${menu === "DIENSTEN" && "active-menu"}`} onClick={handleMenu}> { menu==="DIENSTEN"  && <IconDropdown color={"white"} />}DIENSTEN</NavLink>
                    <NavLink to="/partners" data-id={"PARTNERS"} className={`${menu === "PARTNERS" && "active-menu"}`} onClick={handleMenu}> { menu==="PARTNERS"  && <IconDropdown color={"white"} />}PARTNERS</NavLink>
                    <NavLink to="/vacatures" data-id={"VACATURES"} className={`${menu === "VACATURES" && "active-menu"}`} onClick={handleMenu}> { menu==="VACATURES"  && <IconDropdown color={"white"} />}VACATURES</NavLink>
                    {isAuthenticated && <NavLink to="/users">USERS</NavLink>}
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







