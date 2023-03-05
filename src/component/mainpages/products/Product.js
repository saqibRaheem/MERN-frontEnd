import React,{useContext} from 'react';
import { GLobalState } from '../../../GlobalState';
import ProductItem from '../utils/productitem/ProductItem';



const Product = () => {
    const state = useContext(GLobalState)
    const [products] = state.productsApi.products

    console.log(products);
    return (
        <div className='products'>
            {
                products.map(product =>{
                    return <ProductItem key={product._id} product={product}/>
                })
            }
        </div>
    );
}

export default Product;
