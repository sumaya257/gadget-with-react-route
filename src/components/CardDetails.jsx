import React from 'react';
import Heading from './Heading';
import { useLoaderData, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faHeart } from "@fortawesome/free-solid-svg-icons";

const CardDetails = () => {
    const { id } = useParams();  // Destructure the id from params
    console.log(id);  // Log the id

    const data = useLoaderData()
    console.log(data)
    const ID = parseInt(id)

    const card = data.find(card => card.id === ID)
    console.log(card)
    const { name, image, price, details, Specification, availability, rating } = card

    // add to cart btn with local storage

    return (
        <div>
            <Heading
                title="Product Details"
                subtitle="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
            />
            {/* using the id here to fetch product details or display them */}
            <div className="card lg:card-side bg-base-100 shadow-xl gap-4 w-9/12 mx-auto  relative mt-[-100px]">
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
                        alt="Album" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl">{name}</h2>
                    <h2 className='font-bold'>{`Price: ${price}$`}</h2>
                    <div>
                        <button className='btn rounded-full bg-lime-200'>{availability ? 'In Stock' : 'Stock Out'}</button>
                    </div>
                    <h2>{details}</h2>
                    <div>
                        <h2 className='font-bold mb-1'>Specification:</h2>
                        {Specification.map((item, index) => (
                            <p key={index}>{`${index + 1}. ${item}`}</p>
                        ))}
                    </div>
                    <div className='font-bold'>
                        {`Rating: ${rating}`}
                    </div>

                    <div className='flex gap-5'>
                        <div className='btn bg-[rgb(149,56,226)]'>
                        <div className='flex gap-2 items-center'>
                        <div className='text-white'>Add To Cart</div>
                        <FontAwesomeIcon icon={faShoppingCart} className="text-white/50" size="lg" />
                        </div>
                        </div>
                        <div className='btn'>
                        <button> <FontAwesomeIcon icon={faHeart} className="text-gray-500" size="lg" /> </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;
