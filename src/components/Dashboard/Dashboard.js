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
        this.getPosts = this.getPosts.bind(this)
    }
    

    getPosts() {
        const {id} = reducer;
        const {search, showMyPosts} = this.state;
        console.log(search, showMyPosts)
       axios.get(`/api/posts/${id}`, {search, showMyPosts})
       .then(res => {
           this.setState({
               posts: res.data
           })
       }) 
       console.log(this.state.posts)
    }

    universalHandler(e) {
        this.setState({
            [e.target.name]: e.target.value
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
                <input name='search' value={this.state.search} placeholder='search' onChange={(e) => this.universalHandler(e)} />
                <button onClick={this.getPosts}>Search</button>
                <button>Reset</button>
                <p>Show My Posts</p><input type='checkbox'/>
                {posts}
            </div>
        )
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Dashboard);