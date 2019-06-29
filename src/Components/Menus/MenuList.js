import React from 'react';
import MenuSummary from './MenuSummary';
import { Link } from 'react-router-dom'

const MenuList = ({menus}) => {
    return (
        <div className="menu-list section">
            {menus && menus.map(menu => {
                return (
                    <Link to={'/menu/' + menu.id}>
                    <MenuSummary menu={menu} />
                    </Link>
                )
            })}
        </div>
    )
} 

export default MenuList;