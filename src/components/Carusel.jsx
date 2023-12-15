import React, { useRef, useState } from 'react'
import useFetch from '../helpers/useFetch';
import  '../styles/carusel.scss';
import { ImagenCarrusel } from './ImagenCarrusel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faCircle as facircle2 } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';


const urlImagenes = require.context('../assets/images/carrusel')

export const Carusel = () => {

  const intervalId = useRef(null);
  let posicion = 20;
  const [indicador, setindicador] = useState(0);
  const [bandera, setbandera] = useState(false)
  

  const response = useFetch("https://localhost:7257/api/GetImagenesCarusel");
  
  if(response.loading || !response.result){
    return"cargando..."
  }  
  const{imagenes}=response.result; 

  function changeSlide(){

    if(posicion == 8770){
      document.getElementById("carusel").scrollLeft = 20;
      posicion = 20;
    }
    document.getElementById("carusel").scrollLeft = posicion;
    posicion = posicion + 1750;   
    setindicador(posicion) 
    
  }

  const changeSlideBtn = (valor) =>{

    
    
    document.getElementById("carusel").scrollLeft = posicion;
    posicion = posicion + valor;
    console.log("posicion con el boton", posicion)

    
    if(posicion > 8770){
      document.getElementById("carusel").scrollLeft = 20;
      posicion = 20;
    }
    if(posicion <= 20){
      document.getElementById("carusel").scrollLeft = 20;
      posicion = 20;
    }
    
    setbandera(true);
    setindicador(posicion)
    stopCarrusel();
  }



  function startCarrusel(){
    if (!intervalId.current) {
      intervalId.current = setInterval(changeSlide, 2000);
    }
  };
    
  function stopCarrusel(){
    clearInterval(intervalId.current);
    intervalId.current = null;
  };

  if(bandera === false){
    startCarrusel();
  }
 

  return (
   <div className='d-flex flex-column'>

        <div className='d-flex flex-row' style={{height:"370px"}}>
            {/*  boton izquierda */}
              <div className='asd-success' style={{width:"70px"}}>
                <button className='btnIcon' onClick={() =>changeSlideBtn(-1750)}>
                  <FontAwesomeIcon icon= {faChevronLeft} className='iconLeft' />
                </button>                
              </div>

              {/* imagenes del carrusel */}
              <div className='d-flex flex-row asd-warning imgContent' id = "carusel">        
                    {imagenes.map(elemento =>(
                          <ImagenCarrusel objeto={{elemento, stopCarrusel, startCarrusel, urlImagenes}}/>                     
                      ))}        
              </div>

              {/* boton derecha */}
              <div className='asd-success' style={{width:"70px"}}>
              <button className='btnIcon' onClick={() =>changeSlideBtn(1750)}>
                 <FontAwesomeIcon icon= {faChevronRight} className='iconRigth' />
               </button>
              </div> 

        </div>

      <div className='asd-info indicadores' style={{width:"100vw", height:"40px", position:"fixed", top:"500px"}}>
          {indicador === 1770 || indicador === 0  ? 
            (<FontAwesomeIcon icon= {facircle2} className='iconIndicator' />):
            (<FontAwesomeIcon icon= {faCircle} className='iconIndicator3' id="slide1"/>)}
          {indicador === 3520 ? 
            (<FontAwesomeIcon icon= {facircle2} className='iconIndicator' />):
            (<FontAwesomeIcon icon= {faCircle} className='iconIndicator2' id="slide1" />)}
          {indicador === 5270 ? 
            (<FontAwesomeIcon icon= {facircle2} className='iconIndicator' />):
            (<FontAwesomeIcon icon= {faCircle} className='iconIndicator' />)}
          {indicador === 7020 ? 
            (<FontAwesomeIcon icon= {facircle2} className='iconIndicator' />):
            (<FontAwesomeIcon icon= {faCircle} className='iconIndicator2' />)}
          {indicador === 8770 ? 
            (<FontAwesomeIcon icon= {facircle2} className='iconIndicator' />):
            (<FontAwesomeIcon icon= {faCircle} className='iconIndicator3' />)}
          
      </div>     

    </div>
   
  )
}
