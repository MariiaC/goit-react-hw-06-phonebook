import { useSelector, useDispatch } from 'react-redux';
import { FiPlus } from 'react-icons/fi';
import s from './ContactForm.module.css';
import { nanoid } from 'nanoid';
import { addContact } from '../../redux/actions'


function ContactForm() {
  const dispatch = useDispatch();

  const contactsForChecking = useSelector( state => state.contactsBookReducer.contacts
  );
  const handleSubmit = e => {
    e.preventDefault();

    const target = e.target.elements;

    const isInContacts = contactsForChecking.find(
      contact => contact.name.toLowerCase() === target.name.value.toLowerCase()
    );

    if (isInContacts) {
      alert(`${target.name.value} is already in contacts`);
      return;
    }

    const formData = {
      id: nanoid(),
      name: target.name.value,
      phone: target.number.value,
    };

    dispatch(addContact(formData));

    e.target.elements.name.value = '';
    e.target.elements.number.value = '';
  };

   return (
      <form className={s.contactForm} onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit" className={s.button} >
          
          <FiPlus style={{ color: 'green', paddingRight: 10, fontSize: 18 }} />
          Add contact
        </button>
      </form>
    );
}


export default ContactForm;







