import React, { Component } from 'react'
import Notifications from './Notifications';
import MenuList from '../Menus/MenuList';
import { connect } from  'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

class Dashboard extends Component {
    render() {
        console.log("Dashboard Props",this.props)
        const { menus, auth} = this.props;
        if(!auth.uid) return <Redirect to='/signin' />

        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <MenuList menus={menus} />
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
    console.log("mapStateToProps",state)
    return {
        menus: state.firestore.ordered.menus,
        auth: state.firebase.auth
    }

}
// compose(
export default connect(mapStateToProps)(Dashboard);
    // firestoreConnect([
    //     { collection: 'menus' }
    // ])
// )
