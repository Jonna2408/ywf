import React from 'react'
import useFetch from '../helpers/useFetch';

export const HotsPots = ({idImagen}) => {

 let imagen = idImagen.replace(".png", "");
 const response = useFetch(`https://localhost:7257/api/GetHotspots?nombreImagen=${imagen}`);

  if(response.loading || !response.result){
    return"cargando.."
  }
  
  const{imagenes}=response.result;
   console.log("hotspots", imagenes)
  
  const mostrarImagen = (nombreImagen, top, left) =>{

    let imagen = document.getElementById(nombreImagen)
    imagen.style.display = "block";
    imagen.style.top = top;
    imagen.style.left = left;
  }

  const quitarImagen = (nombreImagen) => {
    document.getElementById(nombreImagen).style.display = "none";
  }
  
  return(
    <>
     {imagenes.map(elemento => (
        <area shape="rect" 
            coords={`${elemento.coordenada_X1},${elemento.coordenada_Y1},${elemento.coordenada_X2},${elemento.coordenada_Y2}`} 
                        onMouseOver={() => mostrarImagen(elemento.idImagen, elemento.topImagen, elemento.leftImagen)}
                        onMouseOut={() => quitarImagen(elemento.idImagen)}
            style={{cursor:"pointer"}}/>     
    ))}   
    </>
                      
  )
}
