import React, { Component } from 'react'

class AddContact extends Component {
    state={
        content: ''
    }

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addContact(this.state)
        this.setState({
            content: ''
        })
    }

    render() {
        return(
            <form className="contactForm container" onSubmit={this.handleSubmit}>
                <label>Add Contact: </label>
                <input type="text" onChange={this.handleChange} className="input" value={this.state.content}/>
            </form>
        )
    }
}

export default AddContact