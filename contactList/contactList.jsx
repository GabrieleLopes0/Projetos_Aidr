import React, { useEffect, useState } from 'react';
import './contactList.css';

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch('http://localhost:3001/contacts');
        if (!response.ok) throw new Error('Erro ao buscar os contatos');
        const data = await response.json();
        setContacts(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchContacts();
  }, []);

  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Lista de Comentários</h2>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            {contact.name} - {contact.comment}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
