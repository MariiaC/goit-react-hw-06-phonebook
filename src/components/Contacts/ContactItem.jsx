import { useDispatch } from 'react-redux'
import { deleteContact } from 'redux/actions';
import { FiTrash2 } from 'react-icons/fi';
import s from './Contacts.module.css';

 function ContactItem({ contact }) {
  const { id, name, number } = contact;

  const dispatch = useDispatch();

  const deletedContact = id => {
    dispatch(deleteContact(id));
  };
  return (
    <li className={s.contactItem}>
      <div>
      <span>
        {name}
        </span>
          <span>
        {number}
      </span>
      <button className={s.button} onClick={() => deletedContact(id)}>
        <FiTrash2 style={{ color: 'red', paddingRight: 10, fontSize:16 }} />
        Delete
      </button>
    </div>
    </li>
  );
}


export default ContactItem;