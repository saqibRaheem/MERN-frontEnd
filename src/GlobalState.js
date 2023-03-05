import React,{createContext,useState} from 'react'
import ProductApi from './api/ProductApi'
export const GLobalState = createContext()

export const DataProvider = ({children}) =>{
   const [token, setToken] = useState(false)


   const state = {
    token:[token, setToken],
    productsApi:ProductApi()
   }

    return(
        <GLobalState.Provider value={state}>{children}</GLobalState.Provider>
    )
}