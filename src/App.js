import React, { Component } from 'react';
import Contacts from './Contacts'
import AddContact from './addContact'

class App extends Component {
  state = {
    contacts : [
      {id: 1, content: "Shedrach Ikenna"},
      {id: 2, content: "Sarah Yunusa"},
      {id: 3, content: "Johnny Dogs"}
    ]
  }

  deleteContact = (id) => {
    const contacts = this.state.contacts.filter((contact) => {
      return(
        contact.id !== id
      )
    })

    this.setState({
      contacts
    })
  }

  addContact = (contact) => {
    contact.id = Math.random();
    const contacts = [...this.state.contacts, contact];
    this.setState({
      contacts
    })
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Contacts</h1>
        </header>
        <Contacts contacts={this.state.contacts} deleteContact={this.deleteContact}/>
        <AddContact addContact={this.addContact}/>
      </div>
    );
  }
}

export default App;


