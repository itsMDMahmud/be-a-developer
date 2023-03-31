import React from 'react';
import './Header.css'
import img from '../../../public/3135715.png'

const Header = () => {
    return (
        <>
            <div className='header'>
                <h1 id='header'>Become a Developer</h1>
                <img src={img} alt="" />            
            </div>
            <hr />
        </>
    );
};

export default Header;