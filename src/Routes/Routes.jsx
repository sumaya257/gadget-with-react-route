import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Statistics from '../pages/Statistics';
import Dashboard from '../pages/Dashboard';
import Cart from '../pages/Cart';
import Favorites from '../pages/Favorites'

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [{
            path: '/',
            element: <Home></Home>,
        },

        {
            path:'/statistics',
            element:<Statistics></Statistics>
        },

        {
            path:'/dashboard',
            element:<Dashboard></Dashboard>
        },

        {
            path:'/cart',
            element:<Cart></Cart>,
        },

        {
            path:'/favorites',
            element:<Favorites></Favorites>
        }
        ]
    },

])

export default routes;