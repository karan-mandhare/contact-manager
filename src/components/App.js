import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid'; // for unique id's to select contact while deleting using trash icon
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {
  const LOCAL_STORE_KEY = 'contacts';

  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORE_KEY)) || [] // getting data from the browser if existed
  );

  const addContactHandler = (contact) => {
    setContacts([...contacts, { id: uuidv4(), ...contact }]); // adding id with rest of contact properties name and email
  };

  const removeContactHandler = (id) => {
    // filtering by avoiding contact with this id
    const newContacts = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContacts);
  };

  useEffect(() => {
    if (contacts.length > 0) {
      localStorage.setItem(LOCAL_STORE_KEY, JSON.stringify(contacts));
    }
  }, [contacts, LOCAL_STORE_KEY]);

  return (
    <div className='app_container'>
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId={removeContactHandler} />
    </div>
  );
}

export default App;