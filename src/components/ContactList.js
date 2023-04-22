import React from 'react'

import ContactCard from './ContactCard';

function ContactList(props) {
  // Check if "contacts" property exists and is an array

  const deleteContactHandler = (id) => {
    props.getContactId(id)
  }

  const renderContactList = props.contacts.map((contact) => {
    return (<ContactCard contact={contact} clickHandler={deleteContactHandler} key={contact.id} />)
  })

  return (
    <div className='list_container'>
      {
        renderContactList
      }
    </div>
  )
}

export default ContactList
