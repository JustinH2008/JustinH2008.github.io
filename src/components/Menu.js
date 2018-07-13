import React from 'react'
import { Link } from "react-router-dom";


function Menu() {
    return (<ul>
        <li><Link to = '/'>Home </Link></li>
        <li><Link to ='/aboutMeWork'>About me work</Link></li>
        <li><Link to ='/aboutMePersonal'>About me personal</Link></li>
    </ul>)
}

export default Menu

