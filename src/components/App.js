import React, { Component, useEffect, useState } from 'react'
import { nanoid } from 'nanoid'

import { ContactList } from './ContactList/ContactList'
import ContactsEditor from './ContactsEditor/ContactsEditor'
import { Filter } from './Filter/Filter'

const App = () => {
  const [contacts, setContacts] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    const savedContacts = localStorage.getItem('contacts')
    if (savedContacts) {
      setContacts(savedContacts)
    }
  }, [])

  // useEffect(() => {
  //     // localStorage.setItem('contacts', contacts)
  //     localStorage.setItem('contacts', JSON.stringify(contacts))
  // }, [contacts])

  const addContact = (name, number) => {
    // const names = contacts.map(contact => contact.name)
    // console.log(names);
    console.log(name);
    console.log(number);

    // if (names.find(myContact => myContact === name)) {
    //   alert(`${name} is already in contacts`)
    // } else {
      const newContact = {
        id: nanoid(),
        name,
        number,
        group: false
      }
     setContacts(state => ({
      ...state,
      ...newContact
     }))
    // }
  }

  // deleteContact = contactId => {
  //   this.setState(prevState => {
  //     return {
  //       contacts: prevState.contacts.filter(({ id }) => id !== contactId)
  //     }
  //   })
  // }

  // updateGroup = contactId => {
  //   this.setState(prevState => {
  //     return {
  //       contacts: prevState.contacts.map(contact => {
  //         if (contact.id === contactId) {
  //           return {
  //             ...contact,
  //             group: !contact.group
  //           }
  //         }
  //         return contact
  //       })
  //     }
  //   })
  // }

  // updateFilter = filter => {
  //   this.setState({ filter })
  // }

  // getFilteredContacts = () => {
  //   return this.state.contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
  //   )
  // }

    // const filteredContacts = this.getFilteredContacts()

    // const closeFriendsGroup = contacts.filter(contact => contact.group)
    // const totalContacts = contacts.length
    // console.log(totalContacts);

    return (
      <>
        <h2>Phonebook</h2>
        <ContactsEditor onAddContact={addContact}></ContactsEditor>

        <h2>Contacts</h2>
        <div>
          <Filter 
          // value={filter} 
          // onUpdateFilter={this.updateFilter} 
          />

          {/* {filteredContacts.length > 0 && ( */}
            <ContactList
            contacts={contacts}
              // contacts={filteredContacts}
              // onDeleteContact={this.deleteContact}
              // onUpdateContact={this.updateGroup}
            />
          {/* )} */}

          <div>
            <p>
              Total contacts: 
              {/* {contacts.length} */}
              </p>
            <p>
              Close friends: 
              {/* {closeFriendsGroup.length} */}
              </p>
          </div>
        </div>
      </>
    )
}

export default App