import React from 'react';
import Post from '../Post/Post'
import {connect} from 'react-redux';
import axios from 'axios';
import reducer from '../../ducks/reducer'

class Dashboard extends React.Component {
    constructor() {
        super();
        this.state = {
            search: '',
            showMyPosts: true,
            posts: [],
            
        }
    }

    getPosts() {
        const {id} = reducer;
        const {search, showMyPosts} = this.state;
       axios.get(`/api/posts/${id}`, {search, showMyPosts})
       .then(res => {
           this.setState({
               posts: res.data
           })
       }) 
    }

    componentDidMount() {
        this.getPosts();
    }

    render() {
        const posts = this.state.posts.map(post => {
           return <Post key={post.post_id} post={post}/>
        })
        return (
            <div>
                Dashboard
                <input placeholder='search' />
                <button>Search</button>
                <button>Reset</button>
                <p>Show My Posts</p><input type='checkbox'/>
                {posts}
            </div>
        )
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Dashboard);