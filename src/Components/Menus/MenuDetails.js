import React from 'react'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';


 
  const MenuDetails = (props) => {
    const { menu, auth } = props;
        if(!auth.uid) return <Redirect to='/signin' />
    if(menu) {
        return (
        <div>
            <div className="container section project-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title"> { menu.title } </span>
                        <p>
                            {menu.content}
                        </p>                    
                    </div>
                    <div className="card-action gret lighten-4 grey-text">
                        <div>Posted by {menu.menuContent} </div> 
                        <div>2nd September, 3am</div>   
                    </div> 
                </div>
            </div>
        </div>
    )
    }
    else{
        return (
            <div className='container center'>
                <p>Loading....</p>
            </div>
        )
    }
  }
const mapStateToProps = (state, ownProps) => {
    console.log('Menu details===>',state)
    const id = ownProps.match.params.id;
    const menus = state.firestore.data.menus;
    const menu = menus ? menus[id] : null
    return {
        menu : menu,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'menus'} 
    ])
)(MenuDetails);

