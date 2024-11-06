import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Card from './Card';


const Cards = () => {
    const data = useLoaderData()
    console.log(data)
    const { category } = useParams()

    const [products, setProducts] = useState([])
    useEffect(() => {
        if (category) {
            const filteredByCategory = [...data].filter(product => product.category === category)
            setProducts(filteredByCategory)
        }
        else {
            // Select 9 random products if no category is provided
            const randomProducts = data.sort(() => 0.5 - Math.random()).slice(0, 9);
            setProducts(randomProducts);
        }
    }, [data, category])

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
            {
                products.map(product => (<Card key={product.id} product={product}></Card>

                ))}
        </div>
    )
}


export default Cards;