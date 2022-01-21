import React,{useState} from 'react';

export default function Card(props) {
    const [numero, setNumero] = useState(0) //valor inicial
    const aumentar = ()=>{
        setNumero(numero + 1)
    }
    
    return <>
        <h2>{props.titulo}</h2>
        <p>Esta es una función Card</p>
        {/* Se coloca entre llaves, para tomarlo como una expresión de javascript */}
        <p>Contenido número {props.numero}</p>
        {/* Esto es un comentario */}
        <p>Numero: {numero}</p>
        <button onClick={aumentar}>Aumentar</button>
        <button onClick={()=>{setNumero(0)}}>Reset</button>
    </>;
}