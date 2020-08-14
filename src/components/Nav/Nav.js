import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import reducer from '../../ducks/reducer';

class Nav extends React.Component {
    
    render() {
        console.log(this.props)
        const {username, profilePic} = reducer
        return (
            <div>
                <h2>{username}</h2>
                <img href={profilePic}/>
                <Link to='/Dashboard'><button>Home</button></Link>
                <Link to='/new'><button>New Post</button></Link>
                <Link to='/'><button>Logout</button></Link>
            </div>
        )
    }
}
const {username, profilePic} = reducer
const mapStateToProps = state => state;

export default connect(mapStateToProps)(Nav);