import React from 'react'
import PropTypes from 'prop-types'
import { ContactListItem } from '../ContactListItem/ContactListItem'

export const ContactList = ({ contacts, onDeleteContact, onUpdateContact }) => {
  return (
    <>
      <ul>
        {Array.isArray(contacts) ? contacts.map((contact) => {
          return <ContactListItem
            key={contact.id}
            name={contact.name}
            number={contact.number}
            group={contact.group}
            onDelete={() => onDeleteContact(contact.id)}
            onUpdate={() => onUpdateContact(contact.id)}
          />
        })
      : null }
      </ul>
    </>
  )
}

ContactList.propTypes = {
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
