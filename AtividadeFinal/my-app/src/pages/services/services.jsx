import React from 'react';
import Card from '../../components/Card/Card';
import './services.css';

const Services = () => {
  return (
    <div className="services">
      <h1>Serviços</h1>
      <div className="services-container">
        <Card title="Casamento" content="Podemos realizar a festa dos sonhos, possuindo horários no período da manhã, tarde e noite, além de diversos modelos." />
        <Card title="Aniversário" content="Decida conosco sobre o primeiro aniversário, 15 anos, ou a maioridade aos 18." />
        <Card title="Batismo" content="Após a cerimônia da igreja, tenha uma incrível comemoração com família e amigos." />
        <Card title="Chá revelação" content="Venha descobrir qual será o sexo e nome da sua criança, decidindo por cores ou símbolos de sua preferência." />
        <Card title="Chá de bebê" content="Venha comemorar conosco o nascimento de uma nova vida, entre amigos e família." />
      </div>
    </div>
  );
};

export default Services;
