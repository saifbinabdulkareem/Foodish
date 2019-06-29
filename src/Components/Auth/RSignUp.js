import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { rSignUp } from '../../Store/Action/AuthAction'

class RSignUp extends Component {
    state = {
        RestaurantName: "",
        OwnerName: "",
        fullName: "",
        email: "",
        country:"",
        city: "",
        password: "",
        file: "",
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.rSignUp(this.state)
        console.log('state ===>', this.state)
    }
    render() {
        const { auth, authError } = this.props;
        if(auth.uid) return <Redirect to='/ ' />

        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white form">
                    <h5 className="grey-text text-darken-3">Sign Up</h5>
                    <div className="input-field">
                        <label htmlFor="name">Restauraunt Name</label>
                        <input type="text" id="RestaurantName" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="name">Owner Name</label>
                        <input type="text" id="OwnerName" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="country">Country</label>
                        <input type="text" id="country" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="city">City</label>
                        <input type="text" id="city" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="addCertificate">Certificate</label>
                        <input type="file" id="file" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <button   className="btn blue z-depth-0">Sign up</button>
                        <div className="red-text center">
                            { authError ? <p>{ authError }</p> : null }
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        rSignUp: (rUser) => dispatch(rSignUp(rUser))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(RSignUp);