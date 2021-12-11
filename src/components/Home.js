import React, { Component } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import Tree from '../Tree.png'

class Home extends Component{
    state = {
        posts : []
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res)
                this.setState({
                    posts: res.data.slice(0,10)
                })
            })
    }
    render(){
        // const posts = this.state.posts;
        const { posts } = this.state
        const postList = posts.length ? (
           posts.map((post) => {
            return(
                <div className="post card" key = {post.id}>
                <img src={Tree} alt="A Christmass Tree"/>
                    <div className="card-content">
                        <NavLink to={'/' + post.id}>
                            <span className="card-title red-text">{post.title}</span>
                        </NavLink>
                        <p>{post.body}</p>
                    </div>
                </div>
            )
           })
        ) : (
            <div className="center">No posts yet</div>
        )
        return(
            <div className="container home">
                <h4 className="center">Home</h4>
                { postList }
            </div>
        )
    }
}

export default Home