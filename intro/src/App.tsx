import './App.css';
import Header from './components/header/Header';
import React from 'react';
// import { ProductService } from './services/productService';
// import { useQuery } from 'react-query';
// import Card from './components/body/Card';
import Content from './components/body/context/Content';


const App: React.FC = () => {
//   const {data, error, isLoading} = useQuery([' products'], ()=> ProductService.getProducts())
  
//  console.log(data)
  return (
    <>
      <Header></Header>
      <Content />
      
  </>
  );
};

export default App;
