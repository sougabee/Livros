import './App.css';
import CardAvaliacao from './Components/CardAvaliacao/CardAvaliacao';
import Estante from './Components/Estante/Estante';
import Header from './Components/Header/Header';
import Menu from './Components/Menu/Menu';
import {BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import BtnContagem from './Components/BtnContagem/BtnContagem';
import React, { useState } from 'react';
import ContagemContext from './Context/ContagemContext';
import Painel from './Painel/Painel';




function App() {
  const [contagem, setContagem] = useState(+1)
  return (
    
    <div className="App">
          
      <Router>

    <div className='App'>
      <ul> 
      <li> <Link to='/'>Home</Link> </li>
        <li> <Link to='/Leitura'>Ver Leituras</Link> </li>
        <li> <Link to='/Estante'>Minha Estante</Link> </li>
        
      </ul>
    <Routes>
      
        <Route path='/' element={<Header />} />
        <Route path='Leitura' element={<BtnContagem />} >  
        <Route path='Estante' element={<Estante />} >
          </Route>  
        </Route>
      </Routes>
    </div>
    
<Painel />
      <hr />
      <ContagemContext.Provider value={{contagem, setContagem}}>
        <BtnContagem />
        <Painel contagem={contagem} />
      </ContagemContext.Provider>

      <h1>Minha Estante</h1>

      <div className='principal'>
        <Menu />
        <Estante />
              </div>
      <h1>Últimas Resenhas</h1>
      <div className='principal'>
        <CardAvaliacao titulo="Seu Livro no Kindle" resenha="“Seu Livro no Kindle – Como Escrever e Publicar um eBook na Amazon” vai te revelar exatamente como tirar seu livro da cabeça ou da gaveta e fazê-lo chegar alugar que merece: nas mãos de seus leitores!" />

        <CardAvaliacao titulo="Seu Livro no Kindle" resenha="“Seu Livro no Kindle – Como Escrever e Publicar um eBook na Amazon” vai te revelar exatamente como tirar seu livro da cabeça ou da gaveta e fazê-lo chegar ao lugar que merece: nas mãos de seus leitores!" />

        <CardAvaliacao titulo="Seu Livro no Kindle" resenha="“Seu Livro no Kindle – Como Escrever e Publicar um eBook na Amazon” vai te revelar exatamente como tirar seu livro da cabeça ou da gaveta e fazê-lo chegar ao lugar que merece: nas mãos de seus leitores!" />

  
       
      </div>

      </Router>
    </div>
   

  );
}

export default App;


