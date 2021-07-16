import React from 'react';
import PropTypes from 'prop-types';

const ContactsList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name}
          {': '}
          {contact.number}
          <button onClick={() => onDelete(contact.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactsList;
