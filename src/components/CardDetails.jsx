import React, { useState, useEffect } from 'react';
import Heading from './Heading';
import { useLoaderData, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faHeart } from "@fortawesome/free-solid-svg-icons";
import { addToStoredCartList, addToStoredWishlist, getStoredWishlist } from '../utilities/addToDb'; // Adjust this import according to your file structure
import StarRatings from 'react-star-ratings'; // Import the star ratings component
import { toast } from 'react-toastify';

const CardDetails = () => {
    const { id } = useParams();  // Destructure the id from params
    const data = useLoaderData();
    const ID = parseInt(id);
    const card = data.find(card => card.id === ID);
    const { name, image, price, details, Specification, availability, rating } = card;

    // State to manage wishlist status
    const [isWished, setIsWished] = useState(false);

    // Check if the item is already in the wishlist when the component mounts
    useEffect(() => {
        const wishlist = getStoredWishlist();
        if (wishlist.includes(id)) {
            setIsWished(true); // Set to true if item is already wished
        }
    }, [id]);

    // Add to cart button handler
    const handleAddToCartBtn = (id) => {
        addToStoredCartList(id);
        toast.success('added to cart!');
    };

    // Add to wishlist button handler
    const handleAddToWishlistBtn = () => {
        // Only add to wishlist if the item is not already wished (i.e., isWished is false)
        if (!isWished && addToStoredWishlist(id)) {
            setIsWished(true);  // Mark the item as wished after adding it to the wishlist
            toast.success('added to WishList!');

        }
    };
    

    return (
        <div>
            <Heading
                title="Product Details"
                subtitle="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
            />
            <div className="card lg:card-side bg-base-100 shadow-xl gap-4 w-9/12 mx-auto relative mt-[-100px]">
                <figure>
                <img
                        src={image}
                        alt="Album" className='h-[420px] w-[500px]' />
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
                        <div className='flex items-center'>
                            <span className='mr-2'>Rating:</span>
                            <StarRatings
                                rating={rating}
                                starRatedColor="rgb(149, 56, 226)"
                                numberOfStars={5}
                                starDimension="20px"
                                starSpacing="5px"
                                name='rating'
                                isSelectable={false} // Prevent interaction if you don't want to allow changing ratings
                            />
                        </div>
                    </div>
                    <div className='flex gap-4'>
                        <button onClick={() => handleAddToCartBtn(id)} className='bg-[rgb(149,56,226)] btn'>
                            <div className='flex items-center gap-2'>
                                <div className='text-white'>Add To Cart</div>
                                <FontAwesomeIcon icon={faShoppingCart} className="text-white/50" size="lg" />
                            </div>
                        </button>
                        <button onClick={handleAddToWishlistBtn} className='border-2 p-3 rounded-full' disabled={isWished}>
                            <FontAwesomeIcon icon={isWished ? faHeart : faHeart} className={isWished ? "text-red-500" : "text-gray-500"} size="lg" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;
