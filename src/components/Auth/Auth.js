import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {idkyet} from '../../ducks/reducer';


class Auth extends React.Component {
    constructor(){
        super();
        this.state = {
            username: '',
            password: ''
        }
    }
    
    universalHandler(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    register() {
        const {username, password} = this.state;
        axios.post('/auth/register', {username, password})
        .then(res => {
            this.props.idkyet(res.data);
            this.props.history.push('/Dashboard')})
    }

    login() {
        const {username, password} = this.state;
        axios.post('/auth/login', {username, password})
        .then(res => {
            this.props.idkyet(res.data);
            this.props.history.push('/Dashboard')})
    }
    render() {
        return (
            <div>
                Auth
                username: 
                <input onChange={e => this.universalHandler(e)} name='username' value={this.state.username}/>
                password:
                <input onChange={e => this.universalHandler(e)} name='password' value={this.state.password}/>
                <button onClick={() => this.login()}>Login</button>
                <button onClick={() => this.register()}>Register</button>
            </div>
        )
    }
}

export default connect(null, {idkyet})(Auth);