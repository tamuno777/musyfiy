import React from 'react'
import './Sidebarbutton.css' 
import { IconContext } from "react-icons";
import { Link, useLocation } from "react-router-dom";


export default function Sidebarbutton(props) {
  const location = useLocation();

  const isActive = location.pathname === props.to;

  const btnClass = isActive ? "con active" : "con";
  return (
    <Link to={props.to}>
        <div className={btnClass}>
            <IconContext.Provider value={{ size: "24px", className: "btn-icon" }}>
               {props.icon}
            <p className='side-title'>          
                {props.title}
            
            </p>
            </IconContext.Provider>

        </div>
    </Link>
  )
}
