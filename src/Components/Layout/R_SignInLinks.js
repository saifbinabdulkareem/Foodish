import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../Store/Action/AuthAction';

const RSignedInLinks = (props) => {
    return (
        <ul className="right">
            <li><NavLink to="/create">Create</NavLink></li>
            <li><a onClick={props.signOut}>Log Out</a></li>
            <li><NavLink to="/" className="btn btn-floating dodgerblue lighten-1">
                {props.profile.initials}    
            </NavLink></li>
        </ul> 
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(RSignedInLinks);