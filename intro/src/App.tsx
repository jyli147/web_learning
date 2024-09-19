import './App.css';
import Header from './components/header/Header';
import React from 'react';
import Content from './components/body/context/Content';


const App: React.FC = () => {

  return (
    <>
      <Header></Header>
      <Content />
      
  </>
  );
};

export default App;
