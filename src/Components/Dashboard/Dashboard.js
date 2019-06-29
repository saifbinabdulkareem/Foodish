import React, { Component } from 'react'
import Notifications from './Notifications';
import MenuList from '../Menus/MenuList';
import { connect } from  'react-redux';
import Grids from '../Layout/Grids'
import Chips from '../Layout/CountryChips';
// import { firestoreConnect } from 'react-redux-firebase';
// import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

class Dashboard extends Component {
    render() {
        console.log("Dashboard Props",this.props)
        const { menus, auth } = this.props;
        if(!auth.uid) return <Redirect to='/signin' />

        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <p>Hello world</p>
                        <MenuList menus={menus} />
                        <Grids />
                        <Chips />
                        
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications />
                    </div>
                </div> 
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    console.log(" Dashboard mapStateToProps===> ",state)
    return {
        menus: state.menu.menus,
        auth: state.firebase.auth
    }

}

export default connect(mapStateToProps)(Dashboard); 
// compose( 
//     connect(mapStateToProps),
//     firestoreConnect([
//         { collection: 'menus' }
//     ])
// )();
