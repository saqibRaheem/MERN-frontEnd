import React,{useContext,useEffect,useState} from 'react';
import { useParams,Link } from 'react-router-dom';
import { GLobalState } from '../../../GlobalState';
import ProductItem from '../utils/productitem/ProductItem';
import './detailProduct.css'

const DetailsProduct = () => {
const params = useParams()
const state = useContext(GLobalState)
const [products] = state.productsApi.products
const [detailProduct, setDetailProduct] = useState([])

useEffect(()=>{
    console.log('re render');

 if(params.id){
  products.forEach(element => {
    if(element._id === params.id) setDetailProduct(element)
  });
 }
},[params.id,products])

if(detailProduct.length === 0) return null;

    return (
        <>
        <div className='detail'>
            <img src={detailProduct.images.url} alt="" />
            <div className="box-detail">
                <div className="row">
                        <h2>{detailProduct.title}</h2>
                        <h6>#id {detailProduct.product_id}</h6>
                </div>
                <span>$ {detailProduct.price}</span>
                <p>{detailProduct.discription}</p>
                <p>{detailProduct.concat}</p>
                <p>Sold: {detailProduct.sold}</p>
                <Link to='/cart' className='cart'>  Buy Now</Link>
            </div>
        </div>

        <div>
            <h2>Related Product</h2>
            <div className="products">
                {
                    products.map(product =>{
                        return(
                            product.category === detailProduct.category
                            ? <ProductItem key={product._id} product={product} /> : null
                        )
                    })
                }
            </div>
        </div>


        </>    );
}

export default DetailsProduct;
