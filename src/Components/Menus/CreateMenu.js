import React, { Component } from 'react';
import { connect } from 'react-redux'
import { createProject } from '../../Store/Action/MenuActions';
import { Redirect } from 'react-router-dom'


class CreateMenu extends Component {
    state = {
        title: "",
        content: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleClick = (e) => {
        e.preventDefault();
        this.props.createProject(this.state)
     
        console.log('state ===>', this.state)
    }
    render() {
        const { auth } = this.props;
        if(!auth.uid) return <Redirect to='/signin' />
        return (
            <div className="container">
                <div className="white form">
                    <h5 className="grey-text text-darken-3">Create</h5>
                    <div className="input-field">
                        <label htmlFor="title">Menu Title</label>
                        <input type="text" id="title" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Menu Content</label>
                        <textarea id="content" className="materialize-textarea" onChange={this.handleChange} ></textarea>
                    </div>
                    <div className="input-field">
                        <button onClick={this.handleClick}  className="btn pink lighten-1 z-depth-0">Create</button>
                    </div>
                </div>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (menu) => dispatch(createProject(menu))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateMenu)
