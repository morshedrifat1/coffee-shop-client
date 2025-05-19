import React from 'react';
import headerImg from '../assets/images/more/15.jpg'
import logo from '../assets/images/more/logo.png'
const Header = () => {
    return (
        <div style={{background:`url(${headerImg})`}} className=' bg-center grid items-center py-4'>
            <img className='w-[250px] sm:w-[320px] mx-auto' src={logo} alt="" />
        </div>
    );
};

export default Header;