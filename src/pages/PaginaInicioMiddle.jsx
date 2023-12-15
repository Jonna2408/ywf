import React, { useState } from 'react';
import '../styles/iniciomedio.scss';

export const PaginaInicioMiddle = ({titulo}) => {
   
    const[color, setcolor] = useState("blue");
    const[texto, settext]=useState("");
    const[text2, setputtext]= useState("aqui sale el texto");
    const[colorDos, setcolordos]= useState("black")


    const ChangeColor =({target})=>{
        console.log("si recibo el color",target.value);
        setcolor(target.value)
    }
    

    const onAddText =({target})=>{
        settext(target.value)
    }

    
    const ChangeColorDos =({target})=>{
        setcolordos(target.value)
    }   
   

    const Puttext=(evento)=>{
       /*  setputtext(texto) */
       console.log("este es el target del button", evento)
    }


    

  return (
    <div className='d-flex flex-column medio mt-2'>
        <div className='titlePromociones'>
            <span> {titulo} </span>
            
        </div>
        <div className='d-flex flex-row descripcion'>
            <div className='imgJona1'>
            <input type='text' placeholder='ingresa aqui un color' onChange={ChangeColor}></input>
            <input type='text' placeholder='ingresa un texto' onChange={onAddText}/>
                <img></img>
            </div>
            <div className='txtDescripcion' style={{background: color}} >
                <span>{texto} deley va texto</span>
                <input type="text" placeholder='para la tecera' onChange={ChangeColorDos}/>
                <button type="button" class='btn btn-danger btn-block' onClick={(evento) =>Puttext(evento)}>boton </button>
            </div>
            <div className='d-flex flex-column imgRigth' style={{background: colorDos}} >
                <span>{colorDos}cambia color</span>
                <span>{text2} aqui el texto</span>                
                <img></img>
                <img></img>
            </div>
        </div>
    </div>
  )
}
