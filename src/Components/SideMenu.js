import React, { useState , useEffect, useContext } from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import { IconDropdown } from './Icons/IconDropdown';
import AuthContext from '../context/auth/AuthContext'
export const SideMenu = ({sideMenu , getSideMenuState , getActiveMenu}) => {
    const authContext = useContext(AuthContext);
    const {  isAuthenticated  } = authContext;
    const [isActive , setIsActive] = useState(false);
    const [menu , setMenu] = useState("");

    const location = useLocation();
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
     setIsActive(!isActive);

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
                    <NavLink to="/home" activeClassName="active-menu"  onClick={handleOnClick}>HOME</NavLink>
                    <NavLink to="/werk" activeClassName="active-menu" onClick={handleOnClick}> WERK</NavLink>
                    <NavLink to="/over" activeClassName="active-menu" onClick={handleOnClick}> OVER</NavLink>
                    <NavLink to="/diensten"  activeClassName="active-menu" onClick={handleOnClick}> DIENSTEN</NavLink>
                    <NavLink to="/partners"  activeClassName="active-menu" onClick={handleOnClick}> PARTNERS</NavLink>
                    <NavLink to="/vacatures" activeClassName="active-menu" onClick={handleOnClick}> VACATURES</NavLink>
                    {isAuthenticated && <NavLink to="/users" activeClassName="active-menu" onClick={handleOnClick}>USERS</NavLink>}
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







