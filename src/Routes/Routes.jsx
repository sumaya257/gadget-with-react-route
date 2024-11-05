import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Statistics from '../pages/Statistics';
import Dashboard from '../pages/Dashboard';
import Cart from '../pages/Cart';
import Favorites from '../pages/Favorites'
import Cards from '../components/Cards';
import CardDetails from '../components/CardDetails';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [{
            path: '/',
            element: <Home></Home>,
            loader:()=> fetch('../categories.json'),
            children:[
             {
                path:'/',
                element:<Cards></Cards>,
                loader:()=>fetch('../products.json'),
              },
              {
                path:'/category/:category',
                element:<Cards></Cards>,
                loader:()=>fetch('../products.json'),
              },
            ],
        },

        {
            path:'/cardDetails/:id',
            element:<CardDetails></CardDetails>,
            loader:()=>fetch('../products.json'),
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