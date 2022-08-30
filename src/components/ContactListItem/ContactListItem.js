import React from 'react'
import PropTypes from 'prop-types'

import { ListItem, DeleteButton } from './ContactListItem.styled'

export const ContactListItem = ({
  name,
  number,
  group,
  onDelete,
  onUpdate
}) => (
  <ListItem>
    <p>
      {name} : {number}
    </p>

    <label>
      <input type='checkbox' checked={group} onChange={onUpdate} />
      Best friend
    </label>

    <DeleteButton type='button' onClick={onDelete}>
      Delete contact
    </DeleteButton>
  </ListItem>
)

ContactListItem.propTypes = {
  onDelete: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      group: PropTypes.bool.isRequired
    })
  )
}
