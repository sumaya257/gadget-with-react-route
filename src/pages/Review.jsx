import React from 'react';
import { Helmet } from 'react-helmet';

// Sample review data
const reviews = [
    {
        title: "Amazing Product!",
        user: "Alice Johnson",
        rating: 5,
        text: "This gadget has exceeded my expectations. Highly recommended!",
        fbLink: "https://www.facebook.com/alice.johnson"
    },
    {
        title: "Good Quality",
        user: "Bob Smith",
        rating: 4,
        text: "Works as expected, though there's room for improvement.",
        fbLink: "https://www.facebook.com/bob.smith"
    },
    {
        title: "Decent Purchase",
        user: "Charlie Brown",
        rating: 3,
        text: "It's okay for the price, but don't expect top-notch quality.",
        fbLink: "https://www.facebook.com/charlie.brown"
    },
    {
        title: "Not Satisfied",
        user: "Diana Lee",
        rating: 2,
        text: "Unfortunately, the product didn't meet my expectations.",
        fbLink: "https://www.facebook.com/diana.lee"
    }
];

// Individual review item component
const ReviewItem = ({ title, user, rating, text, fbLink }) => (
    <div className="border p-4 rounded-lg shadow-md mb-4">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-sm text-gray-600">By: {user}</p>
        <p className="text-yellow-500">
            Rating: {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
        </p>
        <p className="text-gray-700">{text}</p>
        <a href={fbLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
            View Facebook Profile
        </a>
    </div>
);

// Main review component
const Review = () => {
    return (
        <div>
             <Helmet>
                {/* Set the favicon */}
                <title>Review || Gadget</title>
            </Helmet>
            <h2 className="text-center font-bold text-2xl mb-4">Customer Reviews</h2>
            {reviews.map((review, index) => (
                <ReviewItem
                    key={index}
                    title={review.title}
                    user={review.user}
                    rating={review.rating}
                    text={review.text}
                    fbLink={review.fbLink}
                />
            ))}
        </div>
    );
};

export default Review;
