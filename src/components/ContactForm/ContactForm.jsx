import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsOps';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector((state) => state.contacts.items);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const duplicate = contacts.find((contact) => contact.name === name);

    if (duplicate) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label}>
        Name
        <input
          className={styles.input}
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label className={styles.label}>
        Number
        <input
          className={styles.input}
          type="tel"
          name="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          required
        />
      </label>
      <button className={styles.button} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;