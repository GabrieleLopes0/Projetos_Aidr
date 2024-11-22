import React, { useState, useEffect } from 'react';
import './Form.css';

const Form = () => {
  const [formData, setFormData] = useState({ name: '', email: '', comment: '' });
  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState({});
  const [contacts, setContacts] = useState([]); 

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Nome é obrigatório';
    if (!formData.email) newErrors.email = 'Email é obrigatório';
    if (!formData.comment) newErrors.comment = 'Comentário é obrigatória';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      setStatus('Enviando...');
      const response = await fetch('http://localhost:3001/contacts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus('Comentário enviada com sucesso!');
        setFormData({ name: '', email: '', comment: '' });
        setErrors({});
      } else {
        setStatus('Erro ao enviar a Comentário. Tente novamente.');
      }
    } catch (error) {
      setStatus('Erro de conexão. Tente novamente mais tarde.');
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/contacts');
        const data = await response.json();
        setContacts(data); 
      } catch (error) {
        console.error('Erro ao buscar os dados', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="inline-inputs">
          <div>
            <label htmlFor="name">Nome:</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            {errors.name && <p>{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            {errors.email && <p>{errors.email}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="comment">Comentário:</label>
          <p></p>
          <textarea
            id="comment"
            value={formData.comment}
            onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
          />
          {errors.comment && <p>{errors.comment}</p>}
        </div>

        <button type="submit">Enviar</button>
        <p>{status}</p>
      </form>
    </div>
  );
};

export default Form;
