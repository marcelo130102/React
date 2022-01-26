import React, { useState } from 'react';
import Card from './components/Card'

 
const App = ()=>{
  //Se regresan elementos de jsx
  const [tarjetas, setTarjetas] = useState([])

  const agregarTarjeta = () =>{
    tarjetas.push(Card)
    setTarjetas([...tarjetas])
  }

  const eliminarTarjeta = (id)=>{
    const nuevasTarjetas = tarjetas.filter((Card, index)=>index!==id)
    setTarjetas(nuevasTarjetas)
  }

  return (<div >
            <button onClick={agregarTarjeta}>Agregar Tarjeta</button>
            <div className = "cuadricula">
            {tarjetas.map((Card,index)=><Card key={index} numero={index} eliminar={eliminarTarjeta} titulo={`Tarjeta número ${index}`}/>)}
            </div>
            
          </div>);
}

export default App;
