import React from 'react'
import { Link } from "react-router-dom";


function Menu() {
    return (<ul>
        <li><Link to='/'>Home </Link></li>
        <li><Link to='/projects'>projects </Link></li>
        <li><Link to='/aboutMeWork'>Work - About Me</Link></li>
        <li><Link to='/aboutMePersonal'>Personal - About Me</Link></li>
    </ul>)
}

export default Menu

