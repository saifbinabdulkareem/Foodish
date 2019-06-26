import React from 'react';

const ProjectSummary = ({menu}) => {
    return (
        <div className="card z-depth-0 menu-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title"> {menu.title} </span>
                <p>Posted by KFC Pakistan</p>
                <p className="grey-text">3rd September, 2am</p>
            </div>
        </div>
    )
}

export default ProjectSummary;