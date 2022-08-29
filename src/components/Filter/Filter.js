import React from 'react'
import PropTypes from 'prop-types'

import { Input } from '../commonStyles/Input.styled'

export const Filter = ({ value, onUpdateFilter }) => {
  return (
    <Input
      value={value}
      type='text'
      placeholder='Find contact'
      onChange={event => onUpdateFilter(event.target.value)}
    />
  )
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onUpdateFilter: PropTypes.func.isRequired
}
