import React, { Component } from 'react'

class SignIn extends Component {
    state = {
        email: "",
        password: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleClick = (e) => {
        e.preventDefault();
        console.log('state ===>', this.state)
    }
    render() {
        return (
            <div className="container">
                <div className="transparent form">
                    <h5 className="grey-text text-darken-3">Sign In</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <button onClick={this.handleClick}  className="btn pink lighten-1 z-depth-0">Login</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignIn;
