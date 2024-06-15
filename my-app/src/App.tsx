import React, { useEffect } from 'react';
import './components/App.css';
import Header from './components/header';
import Form from './components/Form';
import Fotter from './components/Fotter';



function App() {
  const getFilms = async () => {
    const response = await fetch('https://www.omdbapi.com/?i=tt3896198&apikey=24a33c8f&t=matrix')
    const data = await response.json();
    console.log(data)

  }
  useEffect(() => {
    getFilms();
  }, [])
  return (
    <div className="App">
      <Header/>
      <Form/>
      <Fotter/>
    </div>
  );
}

export default App;
