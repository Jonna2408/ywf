import React, { useState } from 'react'
import { YerwillfreeContext } from './YerwillfreeContext'

export const YerwillfreeProvider = ({children}) => {
 
    const [bandera, setbandera] = useState(true);


  return (
   
    <YerwillfreeContext.Provider value={{
      bandera, setbandera
    }}>
     {children}
    </YerwillfreeContext.Provider>
  )
}
