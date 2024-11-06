import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Statistics from '../pages/Statistics';
import Dashboard from '../pages/Dashboard';
import Cards from '../components/Cards';
import CardDetails from '../components/CardDetails';
import ErrorPage from '../pages/ErrorPage';
import Review from '../pages/Review';

const routes = createBrowserRouter([
    {
        path: '/',
        element:<MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
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
            element:<Dashboard></Dashboard>,
            loader:()=>fetch('../products.json'),
        },

        {
            path:'/review',
            element:<Review></Review>,
        }
        ]
    },

])

export default routes;