import React from 'react'
import useFetch from '../helpers/useFetch';

const urlImagenes = require.context('../assets/images/carrusel')


export const ImagenesHover = () => {
    const response = useFetch("https://localhost:7257/api/GetImagenesHover");

  if(response.loading || !response.result){
    return"cargando..."
  }
  
  const{imagenes}=response.result;

  console.log("estas son las imagenes", imagenes);
  return (
    <>
    {imagenes.map(elemento => (
        <div >
            <img src={urlImagenes(`./${elemento.nombreImagen}`)}
                style={{width:"300px", height:"300px", display:"none", position:"absolute"}} 
                id = {elemento.nombreImagen.replace(".png", "")}/>
            <div>{elemento.componente}</div>
        </div>
    ))}
    </>
  )
}
