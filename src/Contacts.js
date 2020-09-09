import React from 'react'

const Contacts = ({contacts, deleteContact}) => {
    const contactList = contacts.length ? (
        contacts.map((contacts) => {
            return (
                <div className="contact" key={contacts.id}>
                    <p onClick={() => {deleteContact(contacts.id)}}>{contacts.content}</p>
                </div>
            )
        })
    ) : (
        <p>You have no contacts stored</p>
    );
    return (
        <div className="contacts">
            {contactList}
        </div>
    )
}

export default Contacts;