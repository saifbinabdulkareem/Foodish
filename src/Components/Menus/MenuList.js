import React from 'react';
import ProjectSummary from './MenuSummary';

const MenuList = ({menus}) => {
    return (
        <div className="menu-list section">
            {menus && menus.map(menu => {
                return (
                    <ProjectSummary menu={menu} key={menu.id} />
                )
            })}
        </div>
    )
} 

export default MenuList;