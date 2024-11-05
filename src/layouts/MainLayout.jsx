import React from 'react';
import NavBar from '../components/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer'

const MainLayout = () => {
    return (
        <div>
            <div className='h-[64px] container mx-auto'>
            <NavBar></NavBar>
            </div>
            <div className='min-h-[calc(100vh-386px)] container mx-auto'>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;