import ContactForm from './ContactForm/ContactForm';
import ContactList  from './Contacts/ContactList';
import  Filter  from './Filter/Filter'
import s from './App.module.css';



 const App = () => (
  <div className={s.container}>
    <h1>Phonebook</h1>
    <ContactForm />
    <h2>Contacts</h2>
    <Filter />
    <ContactList />
  </div>
);


export default App;


