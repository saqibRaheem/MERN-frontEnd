import axios from 'axios'
import React,{createContext,useState,useEffect} from 'react'
import ProductApi from './api/ProductApi'
export const GLobalState = createContext()

export const DataProvider = ({children}) =>{
   const [token, setToken] = useState(false)

   const refreshToken = async () =>{
    const res = await axios.get('/user/refresh_token')
    setToken(res.data.accesstoken);
   }

  useEffect(()=>{
    const firstlogin = localStorage.getItem('firstlogin')
      if(firstlogin) refreshToken()
  },[])


   const state = {
    token:[token, setToken],
    productsApi:ProductApi()
   }

    return(
        <GLobalState.Provider value={state}>{children}</GLobalState.Provider>
    )
}