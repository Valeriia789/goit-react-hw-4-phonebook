import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Form, Label, SubmitButton } from './ContactsEditor.styled'
import { Input } from '../commonStyles/Input.styled'

export default class ContactsEditor extends Component {
  state = {
    name: '',
    number: ''
  }

  handleChange = event => {
    const { name, value } = event.target

    this.setState({
      [name]: value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.onAddContact(this.state.name, this.state.number)
    this.setState({ name: '', number: '' })
  }

  render () {
    const { name, number } = this.state

    return (
      <Form onSubmit={this.handleSubmit}>
        <Label>
          Name
          <Input
            type='text'
            name='name'
            value={name}
            onChange={this.handleChange}
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
            name='number'
            value={number}
            onChange={this.handleChange}
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
}

ContactsEditor.propTypes = {
  onAddContact: PropTypes.func.isRequired
}
