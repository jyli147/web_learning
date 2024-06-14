import React from 'react';
import './components/App.css';
import Header from './components/header';
import Form from './components/Form';
import Fotter from './components/Fotter';



function App() {
  return (
    <div className="App">
      <Header/>
      <Form/>
      <Fotter/>
    </div>
  );
}

export default App;
