import React, { useState } from 'react'

export const ImagenCarrusel = ({objeto}) => {

 const {stopCarrusel, startCarrusel, urlImagenes, elemento} = objeto;

 const [imagen, setimagen] = useState(elemento.nombreImagen);

 const changeImage = () =>{
   setimagen(elemento.nombreImagen.replace("1", "2"))
 }

 const changeImage2 = () =>{
    setimagen(elemento.nombreImagen)
  }

  return (
    <div onMouseOver={stopCarrusel} onMouseOut={startCarrusel} style={{marginLeft:"50px"}}>
      <img  className = "imgcarusel"  src={urlImagenes(`./${imagen}`)} usemap="#image-map"
       onMouseOver={changeImage}
       onMouseOut={changeImage2}/>
    </div> 
  )
}
