import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ product }) => {
    console.log('got product', product)
    const { id,image, name, price } = product

    return (
        <Link to={`/cardDetails/${id}`}>
                    
        <div className="card bg-base-100 w-80 shadow-xl">
            <figure className="px-10 pt-10">
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes"
                    className="rounded-xl" />
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