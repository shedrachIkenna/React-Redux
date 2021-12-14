import React, { Component } from 'react'
// import axios from 'axios'
import { NavLink } from 'react-router-dom'
import Tree from '../Tree.png'
import { connect } from 'react-redux'

class Home extends Component{
    handleClick = (id) => {
        this.props.deletePost(id)
        console.log(id)
    }
    
    render(){
        // const posts = this.state.posts;
        const { posts } = this.props
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
                        <div className="center">
                            <button className="btn grey" onClick = {() => {this.handleClick(post.id)}}>
                                Delete Post
                            </button>
                        </div>
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

const mapStateToProps = ((state) => {
    return {
        posts : state.posts 
    }
})

const mapDispatchToprops = (dispatch) => {
    return {
        deletePost: (id) => {dispatch ({type: 'DELETE_POST', id:id })}
    }
}


export default connect(mapStateToProps, mapDispatchToprops)(Home)




    // state = {
    //     posts : []
    // }

    // componentDidMount(){
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //         .then(res => {
    //             console.log(res)
    //             this.setState({
    //                 posts: res.data.slice(0,10)
    //             })
    //         })
    // }