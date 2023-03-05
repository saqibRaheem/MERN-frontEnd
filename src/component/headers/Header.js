import React,{useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import { GLobalState } from '../../GlobalState';
import {FaAlignJustify,FaTimes,FaLuggageCart} from 'react-icons/fa'
const Header = () => {
    const value = useContext(GLobalState)
    return (
       <header>
        <div className='menu'>
            <FaAlignJustify  size={30}/>
        </div>
        <div className="className">
            <h1>
                <Link to='/'>Shoping</Link>
            </h1>
        </div>
        <ul>
            <li><Link to='/'>Product</Link></li>
            <li><Link to='/login'>Login + Register</Link></li>
            <li>
                <FaTimes size={30} className='menu'/>
            </li>
        </ul>
        <div className='cart-icon'>
            <span>0</span>
            <Link to='/cart'>
                <FaLuggageCart size={30} />
            </Link>
        </div>
       </header>
    );
}

export default Header;
