import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions'

class Login extends React.Component {
    state = {
      credentials: {
        username: '',
        password: ''
      }
    };

    handleChange = e => {
        this.setState({
          credentials: {
            ...this.state.credentials,
            [e.target.name]: e.target.value
          }
        });
    };

    render() {
        return (
            < form onSubmit= {event => {
                event.preventDefault()
                this.props.login(this.state.credentials.username,this.state.credentials.password)
                }}> 
                {JSON.stringify(this.props.user)}
                {JSON.stringify(this.props.loginAttempt)}
                {JSON.stringify(this.props.error)}

                <input 
                value={this.state.credentials.username}
                onChange={this.handleChange}
                type="text" 
                placeholder="username" 
                name="username" 
                />

                <input 
                value={this.state.credentials.password}
                onChange={this.handleChange}
                type="password" 
                placeholder="password" 
                name="password" 
                />

                <button type="submit" > Login </button>
            </ form>
        )}
}
const mapStateToProps = (state) => {
    return {loginAttempt: state.loginAttempt, user: state.user , error: state.error}
}

export default connect(mapStateToProps, {login})(Login)