import React from 'react';
import img1 from '../assets/images/cups/Rectangle 9.png';
import img2 from '../assets/images/cups/Rectangle 10.png';
import img3 from '../assets/images/cups/Rectangle 11.png';
import img4 from '../assets/images/cups/Rectangle 12.png';
import img5 from '../assets/images/cups/Rectangle 13.png';
import img6 from '../assets/images/cups/Rectangle 14.png';
import img7 from '../assets/images/cups/Rectangle 15.png';
import img8 from '../assets/images/cups/Rectangle 16.png';
const FollowInstagram = () => {
    return (
        <div className='py-15 px-5'>
            <div className='max-w-[1320px] mx-auto'>
                <p className='font-text text-text text-base text-center'>Follow Us Now</p>
                <h1 className='font-heading text-5xl text-center text-heading [text-shadow:2px_2px_4px_rgba(0,0,0,0.4)] mt-2'>Follow on Instagram</h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-11'>
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                    <img src={img4} alt="" />
                    <img src={img5} alt="" />
                    <img src={img6} alt="" />
                    <img src={img7} alt="" />
                    <img src={img8} alt="" />
                </div>
            </div>
        </div>
    );
};

export default FollowInstagram;