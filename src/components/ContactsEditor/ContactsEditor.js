import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { Form, Label, SubmitButton } from './ContactsEditor.styled'
import { Input } from '../commonStyles/Input.styled'

const ContactsEditor = () => {
  // ?? - заменяет || при присвоении значения,
  //  правую часть вернет только в том случае, если слева стоит undefined или null
  const [contactName, setContactName] = useState(
    JSON.parse(window.localStorage.getItem('contactName')) ?? ''
  )
  const [contactNumber, setContactNumber] = useState(
    JSON.parse(window.localStorage.getItem('contactNumber')) ?? ''
  )

  const handleChange = event => {
    const { name, value } = event.target

    switch (name) {
      case 'contactName':
        setContactName(value)
        break
      case 'contactNumber':
        setContactNumber(value)
        break
      default:
        return
    }
  }

  useEffect(() => {
    console.log('contactName useEffect')
    window.localStorage.setItem('contactName', JSON.stringify[contactName])
  }, [contactName])

  useEffect(() => {
    console.log('contactNumber useEffect')
    window.localStorage.setItem('contactNumber', JSON.stringify[contactNumber])
  }, [contactNumber])

  const handleSubmit = event => {
    event.preventDefault()
    // this.props.onAddContact(this.state.name, this.state.number)
    // this.setState({ name: '', number: '' })
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          type='text'
          name='contactName'
          value={contactName}
          onChange={handleChange}
          placeholder='Name Surname'
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>

      <Label>
        Phone number
        <Input
          type='tel'
          name='contactNumber'
          value={contactNumber}
          onChange={handleChange}
          placeholder='+38 000 00 00'
          pattern='\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}'
          title='Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
          required
        />
      </Label>

      <SubmitButton type='submit'>Add contact</SubmitButton>
    </Form>
  )
}

ContactsEditor.propTypes = {
  // onAddContact: PropTypes.func.isRequired
}

export default ContactsEditor
