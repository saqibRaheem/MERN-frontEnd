import React from 'react';
import {Routes,Route} from 'react-router-dom'

import Login from './auth/Login';
import Register from './auth/Register';
import Cart from './cart/Cart';
import DetailsProduct from './detailproduct/DetailsProduct';
import Product from './products/Product';
import NotFound from './utils/not_found/NotFound';



const Pages = () => {
    return (
        <Routes>
            <Route path='/' exect element={<Product />} />
            <Route path='/detail/:id' exect element={<DetailsProduct/>} />
            <Route path='/login' exect element={<Login />} />
            <Route path='/register' exect element={<Register />} />
            <Route path='/cart' exect element={<Cart />} />


            <Route path='*' exect element={<NotFound />} />
        </Routes>
    );
}

export default Pages;
