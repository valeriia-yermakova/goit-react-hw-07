import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';
import { createSelector } from '@reduxjs/toolkit';
import styles from './ContactList.module.css';

const selectFilteredContacts = createSelector(
  [(state) => state.contacts.items, (state) => state.filters.name],
  (contacts, filter) =>
    contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    )
);

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={styles.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={styles.item}>
          <p>
            {name}: {number}
          </p>
          <button
            className={styles.button}
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;