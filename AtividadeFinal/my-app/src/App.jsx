import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home/home';
import About from './pages/about/about';
import Services from './pages/services/services';
import Contact from './pages/contact/contact';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';

const App = () => {
  return (
    <Router>
      <div id="root">
        <Header title="Casa das Festas" />
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">Sobre</Link>
          <Link to="/services">Serviços</Link>
          <Link to="/contact">Comentar</Link>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer text="© 2024 Casa das Festas" />
      </div>
    </Router>
  );
};

export default App;
// npm install -g json-server
//json-server --watch db.json --port 3001

