import React, { Component } from 'react'
// import axios from 'axios'
import { connect } from 'react-redux'

class Post extends Component {

    render() {
        const post = this.props.post ? (
            <div className="post">
                <h4 className="center">{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
            </div>
        ) : (
            <div className="center">Loading Post...</div>
        )

        return (
            <div className="container">
                <h4>{post}</h4>
            </div>
        )
    }
}

const mapStateToProps = ((state, ownprops) => {
    let id = ownprops.match.params.post_id 
    return {
        post : state.posts.find((post) => {
            return post.id === id
        })
    }
}) 

export default connect(mapStateToProps)(Post)






    // componentDidMount(){
    //     const id = this.props.match.params.post_id;
    //     axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
    //         .then((res) => {
    //             console.log(res)
    //             this.setState({
    //                 post : res.data
    //             })
    //         })

    // }