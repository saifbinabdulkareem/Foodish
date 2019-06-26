import React, { Component } from 'react'

class SignUp extends Component {
    state = {
        fullName: "",
        email: "",
        gender: "",
        age: "",
        country:"",
        city: "",
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
                    <h5 className="grey-text text-darken-3">Sign Up</h5>
                    <div className="input-field">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="fullName" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange} />
                    </div>
                    
                    <div className="input-field">
                        <label htmlFor="gender">Gender</label>
                        <input type="text" id="gender" onChange={this.handleChange} />
                    </div>
                    
                    <div className="input-field">
                        <label htmlFor="age">Age</label>
                        <input type="number" id="age" onChange={this.handleChange} />
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
                        <button onClick={this.handleClick}  className="btn pink lighten-1 z-depth-0">Sign up</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignUp;
