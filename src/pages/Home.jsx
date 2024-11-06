import React from 'react';
import Banner from '../components/Banner';
import Categories from '../components/Categories';
import { Outlet, useLoaderData } from 'react-router-dom';
import { Helmet } from 'react-helmet';


const Home = () => {
    const categories= useLoaderData()
    console.log(categories)
    return (
        <div>
            <Helmet>
                <title>Home || Gadget</title>
            </Helmet>

            <Banner></Banner>

            {/* categories section */}
            <div>
            <h2 className='text-center text-3xl font-bold mb-10'>Explore Cutting-Edge Gadgets</h2>

            <div className='md:flex md:gap-4'>
            <Categories categories={categories}></Categories>
            {/* dynamic nested components */}
            <Outlet></Outlet>
            </div>

            </div>
            
        </div>
    );
};

export default Home;