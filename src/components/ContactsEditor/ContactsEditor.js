import PropTypes from 'prop-types'

import useLocalStorage from '../../hooks/useLocalStorage'

import { Form, Label, SubmitButton } from './ContactsEditor.styled'
import { Input } from '../commonStyles/Input.styled'

const ContactsEditor = ({ onAddContact }) => {
  const [name, setName] = useLocalStorage('name', '')
  const [number, setNumber] = useLocalStorage('number', '')

  const handleChange = event => {
    const { name, value } = event.target

    switch (name) {
      case 'contactName':
        setName(value)
        break
      case 'contactNumber':
        setNumber(value)
        break
      default:
        return null
    }
  }

  const handleSubmit = event => {
    event.preventDefault()
    onAddContact(name, number)
    setName('')
    setNumber('')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          type='text'
          name='contactName'
          value={name}
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
          value={number}
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
  onAddContact: PropTypes.func.isRequired
}

export default ContactsEditor

// ?? - заменяет || при присвоении значения,
//  правую часть вернет только в том случае, если слева стоит undefined или null

// так погано:
// const [contactNumber, setContactNumber] = useState(
//   JSON.parse(window.localStorage.getItem('contactNumber')) ?? ''
// )

// так добре (лінива ініціалізація початкового значення,
//    функція буде викликана лише один раз, під час першого рендеру) :
//    const [contactName, setContactName] = useState(() => {
//     return JSON.parse(window.localStorage.getItem('contactName')) ?? ''
//   })
