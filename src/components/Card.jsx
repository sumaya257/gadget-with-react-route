import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ product }) => {
    console.log('got product', product)
    const { id,image, name, price } = product

    return (
        <Link to={`/cardDetails/${id}`}>
                    
        <div className="card bg-base-100 w-80 shadow-xl h-[380px]">
            <figure className="px-10 pt-10">
                <img 
                    src={image}
                    alt="Shoes"
                    className="rounded-xl h-[200px]" />
            </figure>
            <div className="card-body items-start">
                <h2 className="card-title">{name}</h2>
                <p>{`price: ${price}$`}</p>
                <div className="card-actions">
                    <button className="btn bg-[#9538E2] text-white">View Details
                    </button>
                </div>
            </div>
        </div>
        </Link>
    );
};

export default Card;