import React from 'react';
import Card from '../../components/Card/Card';
import './About.css'; 

const About = () => {
  return (
    <div className="about-container">
      <h1>Sobre Nós</h1>
      <Card 
        title="Quem Somos" 
        content="Somos uma equipe dedicada a oferecer os melhores serviços quando se trata de festas de aniversário, decidimos quais os melhores locais, dias e horários de acordo com seu desejo. Realizamos casamentos, aniversários, batizados e mais." 
      />
      <Card 
        title="Como Funcionamos" 
        content="Trabalhamos com equipes especializadas no assunto, com você podendo escolher o horario, tipo de festa, local e itens durante o evento" 
      />
    </div>
  );
};

export default About;
