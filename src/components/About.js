import React from 'react'
import Rainbow from '../hoc/Rainbow'

const About = () => {
    return(
        <div className="container">
        <h4 className="center">About</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure ipsum rerum cum vero voluptates officiis nostrum eligendi adipisci rem veritatis voluptate nesciunt deleniti nisi voluptatem, earum minima sint ut maxime.</p>
        </div>
    )
}

export default Rainbow(About)