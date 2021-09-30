import React from 'react';

import './scss/app.css';
import { Header } from './Components/Header';
import { News } from './Components/News';
import { Clients } from './Components/Clients';
import { ContactForm } from './Components/ContactForm';
import { Footer } from './Components/Footer';



function App() {
  return (
    <div className="App">

      <Header />
      
      <News />
      <Clients />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
