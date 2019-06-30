import React from 'react';
import { NavLink } from 'react-router-dom';

const RSignedOutLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to="/rsignup">Signup</NavLink></li>
            <li><NavLink to="/rsignin">Login</NavLink></li>
        </ul>
    )
}

export default RSignedOutLinks;