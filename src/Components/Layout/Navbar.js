import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';


const Navbar = (props) => {
    const { auth } = props;
    // console.log("navabr auth",auth)
    const links = auth ? <SignedInLinks /> : <SignedOutLinks />;
    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <Link to="/" className="brand-logo"><span style={{fontFamily: "Segoe UI"}} >Foodish</span></Link>
                {links}
            </div>
        </nav>
    )
};

const mapStateToProps = (state) => {
    console.log("Navbar ===>",state);
    return {

    }
}

export default connect(mapStateToProps)(Navbar);