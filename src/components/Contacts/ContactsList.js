import React from 'react'
import PropTypes from 'prop-types'
import { ContactsListItem } from './ContactsListItem'

export const ContactsList = ({
  contacts,
  onDeleteContact,
  onUpdateContact
}) => {
  return (
    <>
      <ul>
        {contacts.map(contact => (
          <ContactsListItem
            key={contact.id}
            name={contact.name}
            number={contact.number}
            group={contact.group}
            onDelete={() => onDeleteContact(contact.id)}
            onUpdate={() => onUpdateContact(contact.id)}
          />
        ))}
      </ul>
    </>
  )
}

ContactsList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  onUpdateContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      group: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired
    })
  )
}
