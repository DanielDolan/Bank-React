import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';

class Home extends Component {
  render() {
    return (
        <div>
        <h1> <u> Bank of React</u></h1>

          <Link to="/login">Login</Link>
          <br></br>
          <Link to="/userProfile">User Profile</Link>


          <AccountBalance accountBalance={this.props.accountBalance}/>
        </div>
    );
  }
}

export default Home;