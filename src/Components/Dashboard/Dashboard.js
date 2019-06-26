import React, { Component } from 'react'
import Notifications from './Notifications';
import MenuList from '../Menus/MenuList';
import { connect } from  'react-redux';

class Dashboard extends Component {
    render() {
        // console.log("Props",this.props)
        const {menus} = this.props;

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
    return {
        menus: state.menu.menus
    }

}
export default connect(mapStateToProps)(Dashboard);
