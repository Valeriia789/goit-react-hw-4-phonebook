import React, { Component } from 'react'
import { nanoid } from 'nanoid'

import { ContactsList } from './Contacts/ContactsList'
import ContactsEditor from './ContactsEditor/ContactsEditor'
import { Filter } from './Filter/Filter'

export default class App extends Component {
  state = {
    contacts: [],
    filter: ''
  }

  componentDidMount () {
    const contacts = localStorage.getItem('contacts')
    const parsedContacts = JSON.parse(contacts)

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts })
    }
  }

  componentDidUpdate (_, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }

  addContact = (name, number) => {
    const { contacts } = this.state
    const names = contacts.map(contact => contact.name)

    if (names.find(myContact => myContact === name)) {
      alert(`${name} is already in contacts`)
    } else {
      const newContact = {
        id: nanoid(),
        name,
        number,
        group: false
      }
      this.setState(prevState => {
        return {
          contacts: [...prevState.contacts, newContact]
        }
      })
    }
  }

  deleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactId)
      }
    })
  }

  updateGroup = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.map(contact => {
          if (contact.id === contactId) {
            return {
              ...contact,
              group: !contact.group
            }
          }
          return contact
        })
      }
    })
  }

  updateFilter = filter => {
    this.setState({ filter })
  }

  getFilteredContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    )
  }

  render () {
    const { contacts, filter } = this.state
    const filteredContacts = this.getFilteredContacts()

    const closeFriendsGroup = contacts.filter(contact => contact.group)

    return (
      <>
        <h2>Phonebook</h2>
        <ContactsEditor onAddContact={this.addContact}></ContactsEditor>

        <h2>Contacts</h2>
        <div>
          <Filter value={filter} onUpdateFilter={this.updateFilter} />

          {filteredContacts.length > 0 && (
            <ContactsList
              contacts={filteredContacts}
              onDeleteContact={this.deleteContact}
              onUpdateContact={this.updateGroup}
            />
          )}

          <div>
            <p>Total contacts: {contacts.length}</p>
            <p>Close friends: {closeFriendsGroup.length}</p>
          </div>
        </div>
      </>
    )
  }
}
