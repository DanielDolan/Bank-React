
import React, { Component } from 'react';
import Home from './Home';
import {Link} from 'react-router-dom';

class UserProfile extends Component {
    render() {
        return (
            <div>
                <Link to="/">Home</Link>
                <h1>User Profile</h1>

                <div>Username: {this.props.userName}</div>
                <div>Member Status: {this.props.memberSince}</div>
            </div>
        );
    }
}

export default UserProfile;