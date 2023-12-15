import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Login } from '../pages/Login'
import { Inicio } from '../pages/Inicio'


export const Rutas = () => {
  return (
    <Routes>
        <Route path='/Login'element={<Login mensaje='este es mi mensaje de login'/>}></Route>
        <Route path='/inicio'element={<Inicio pagina='esta es mi pagina principal'/>}></Route>
        <Route path='/'element={<Navigate to ="/inicio"/>}>   </Route>
    </Routes>
  )
}
