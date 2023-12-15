import React, { useState } from 'react';
import { helpHttp } from '../helpers/helpHttp';
import '../styles/loginStyle.scss'; 
import { useNavigate } from 'react-router-dom';


let api = helpHttp();

export const Login = () => {

const [usuario, setusuario] = useState("");
const [pass, setpass] = useState("");
const navigate = useNavigate();

  const onAddUsuario = ({target}) =>{
  setusuario(target.value)
  document.getElementById("spanUsuario").style.color = "black"
  }

  const onAddPass = ({target}) =>{
  setpass(target.value);
  document.getElementById("spanPass").style.color = "black"
  }

  const validarDatos = () =>{

    if(usuario === "" || pass ===""){
    alert("debe llenar todos los campos")
        if(usuario===""){
          document.getElementById("spanUsuario").style.color = "red"
        }else{
          document.getElementById("spanPass").style.background = "red"
        }
        return;
    }else{
      let data = {
      UserDNI: usuario,
      UserPass: pass
      }
     sendData(data)
  }

  
}
const sendData = (data) =>{
  data.id = Date.now();
  let url = 'https://localhost:7257/api/GetUserLogin';
  let options = {
  body: data,
  headers: { "content-type": "application/json" },
  };

  api.post(url, options).then((res) => {
  /* console.log(res); */
  if (!res.err) {
      if(res.registro != false){
        console.log("respuesta", JSON.parse(res?.registro[0])
        )
        navigate("/inicio")
      }else{
        alert("usuario no existe")
      }        
  } else {
      console.log(res);
  }
  });    
  
}

return (
  <div className= 'login'> 
     <div className='card'>
      <h1 className='tituloLogin'>Login</h1>
      <div>
          <div className='usuario d-flex flex-column'>
              <span id="spanUsuario">Ingrese Usuario</span>
              <input className="iptUsuario" type="text" placeholder='ingrese sus credenciales' onChange={onAddUsuario}/> 
          </div>
          <div className='pass d-flex flex-column mt-3'>
              <span id="spanPass" >Ingrese su contraseña</span>
              <input className="iptPass" type="password" placeholder='ingrese su contraseña' onChange={onAddPass}/>
          </div>
          <button className='btn btnGuardar' onClick={validarDatos} > ingresar</button>
      </div>
  </div>
      
  </div>
)
}