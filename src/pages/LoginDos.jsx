import React, { useState } from 'react';
import { helpHttp } from '../helpers/helpHttp';

let api = helpHttp();

export const LoginDos = () =>{

const [usuario, setusuario] = useState("");
const [pass, setpass] = useState("");

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
        console.log("esta es la respuesta desde el back", res);           
    } else {
        console.log(res);
    }
    });   
}


return (
    <div> 
        <h1>LoginDos</h1>
        <div>
            <div>
                <span id="spanUsuario">Ingrese Usuario</span>
                <input type="text" placeholder='ingrese sus credenciales' onChange={onAddUsuario}/> 
            </div>
            <div>
                <span >Ingrese su contraseña</span>
                <input type="password" placeholder='ingrese su contraseña' onChange={onAddPass} id = "spanPass"/>
            </div>
            <button className='btn bg-primary' onClick={validarDatos} > ingresar</button>
        </div>
    </div>
)  
}
 
