import ContactItem from './ContactItem';
import { useSelector } from 'react-redux';

 function ContactList() {
  const filterWord = useSelector(state => state.contactsBookReducer.filter);
  const contacts = useSelector(state => state.contactsBookReducer.contacts);

  const gettedContacts = contacts;

  const getFilteredContacts = () => {
    const normalizedFilter = filterWord.toLowerCase();

    return gettedContacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

   return (
     <ul>
      
        {getFilteredContacts().map(contact => (
        <ContactItem key={contact.id} contact={contact}></ContactItem>
      ))}
  
   </ul>)
}
 
export default ContactList