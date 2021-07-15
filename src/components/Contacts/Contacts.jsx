import React from 'react';

const Contacts = ({title, contacts}) => {
    return (
        <>
            <p>{ title}</p>
            <ul>
                {contacts.map(contact => (
                    <li key={contact.id}>{contact.name}{': '}{contact.number}</li>
            ))}
            </ul>
        </>
    );
};

export default Contacts;