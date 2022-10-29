import React from "react";
import "./navbar.scss";
import { NavLink } from 'react-router-dom';

const links = [
    {name: "Squads", to:"/squads"},
    {name: "Scorecard", to:"/"},
    {name: "Commentary", to:"/commentary"},
    {name: "Highlights", to:"/highlights"},
];

const Navbar = () => {
    return (
        <div className="nav__container">
            <div className="nav__wrapper">
                {links.map((item)=>(
                    <NavLink 
                        key={item.name}
                        to={item.to}
                        className={({isActive})=> isActive ? "active-link navlink" : "inactive-link navlink"}
                    >
                        {item.name}
                    </NavLink>
                ))}
            </div>
        </div>
    )
}

export default Navbar