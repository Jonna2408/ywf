import React, { useState } from 'react';
import '../styles/inicio.scss'
import imagenes from '../assets/imagenes.js'
import { Carusel } from '../components/Carusel.jsx';
import {YerwillfreeProvider} from '../Context/YerwillfreeProvider.jsx';
import { PaginaInicioMiddle } from './PaginaInicioMiddle.jsx';


export const Inicio = ({pagina}) => {
  let titulo= "promociones de la parte media";

  
  return (
    <YerwillfreeProvider>
      <div className='d-flex flex-column allContent'>
              <div className= 'logo' >
                
                  <img src= {imagenes.logo} className='img-logo' />
                
              </div>
              <div className='menu'> 
                <div className='d-flex flex-row botonera'>
                  <button type="button" class="btn btnRojo">
                    <span className='lblbtn'> Iniciar sesion</span>
                  </button>
                  <button type="button" class="btn btnRojo">
                    <span className='lblbtn'> registrarse </span>
                    </button>
                  <button type="button" class="btn btnRojo">
                    <span className='lblbtn'> promociones</span>
                  </button>
                  <button type="button" class="btn btnRojo">
                    <span className='lblbtn'> Contacto</span>
                  </button>              
                </div>  
              </div>
              <div className='carusel'> 
                <Carusel />          
              </div>
              
              <div className='nombre'>
                <div className="Y">Y</div>
                <div className="E">E</div>
                <div className="R">R</div>
                <div className="W">W</div>
                <div className="I">I</div>
                <div className="L">L</div>
                <div className="L2">L</div>
                <div className="F">F</div>
                <div className="R2">R</div>
                <div className="E2">E</div>
                <div className="E3">E</div>
              
              </div>

              <PaginaInicioMiddle titulo={titulo}/>
      
      </div>
    </YerwillfreeProvider>
    
  )
}
  