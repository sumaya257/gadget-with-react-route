import React from 'react';
import banner from '../assets/banner.jpg';
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <div className="relative mb-[-110px]">
            {/* Heading Div */}
            <div className="text-center h-[594px] bg-[#9538E2] text-white p-10 rounded-2xl border-2">
                <h1 className="text-5xl font-bold my-8">Upgrade Your Tech Accessorize with <br />Gadget Heaven Accessories</h1>
                <p className="mt-2">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
                <Link to='/dashboard' className='btn bg-white text-[#9538E2] rounded-2xl mt-8 px-5'>Shop Now</Link>
            </div>

            {/* Image Div */}
            <div className='relative top-[-200px]'>
            <img 
                src={banner}
                alt="Banner" 
                className="w-9/12 h-[511px] mx-auto object-cover rounded-2xl border-2 "
            />
            </div>
        </div>
    );
};

export default Banner;
