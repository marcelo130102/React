import React from 'react';
import Card from './components/Card'


const App = ()=>{
  //Se regresan elementos de jsx
  const numero = 1;
  const frutas = ["Manzana", "Pera", "Naranja"];
  return (<div>
            <p>Hola</p> 
            <Card titulo={`La tarjeta número ${numero}`} numero ={numero}/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            {frutas}
            {frutas.map((frutas,index)=><p key={index}>{frutas}</p>)}
          </div>);
}

export default App;
