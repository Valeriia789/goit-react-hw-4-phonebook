import { useState } from 'react'
import { nanoid } from 'nanoid'

import useLocalStorage from '../hooks/useLocalStorage'
import { ContactList } from './ContactList/ContactList'
import ContactsEditor from './ContactsEditor/ContactsEditor'
import { Filter } from './Filter/Filter'

const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', [])

  const [filter, setFilter] = useState('')

  const addContact = (name, number) => {
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

      setContacts(prevState => [...prevState, newContact])
    }
  }

  const deleteContact = contactId => {
    setContacts(contacts.filter(({ id }) => id !== contactId))
  }

  const updateGroup = contactId => {
    setContacts(
      contacts.map(contact => {
        if (contact.id === contactId) {
          return {
            ...contact,
            group: !contact.group
          }
        }
        return contact
      })
    )
  }

  const updateFilter = sort => {
    setFilter(sort)
  }

  const getFilteredContacts = () => {
    if (filter) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
    }
    return contacts
  }

  const contsctsInGroup = contacts.filter(contact => contact.group)
  const closeFriendsGroup = contsctsInGroup.length
  const totalContacts = contacts.length
  const filteredContacts = getFilteredContacts()

  return (
    <>
      <h2>Phonebook</h2>
      <ContactsEditor onAddContact={addContact}></ContactsEditor>

      <h2>Contacts</h2>
      <div>
        <Filter value={filter} onUpdateFilter={updateFilter} />

        {filteredContacts.length > 0 && (
          <ContactList
            contacts={filteredContacts}
            onDeleteContact={deleteContact}
            onUpdateContact={updateGroup}
          />
        )}

        <div>
          <p>
            Total contacts:
            {totalContacts}
          </p>
          <p>
            Close friends:
            {closeFriendsGroup}
          </p>
        </div>
      </div>
    </>
  )
}

export default App

