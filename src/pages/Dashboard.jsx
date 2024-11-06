import React, { useEffect, useState } from 'react';
import Heading from '../components/Heading';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useLoaderData } from 'react-router-dom';
import { getStoredCartList, getStoredWishlist, addToStoredCartList, addToStoredWishlist } from '../utilities/addToDb';
import Card from '../components/Card';

// Helper function to update the cart in localStorage
const updateStoredCart = (cartList) => {
    const cartListStr = JSON.stringify(cartList);
    localStorage.setItem('cart-list', cartListStr);
};

// Helper function to update the wishlist in localStorage
const updateStoredWishlist = (wishlist) => {
    const wishlistStr = JSON.stringify(wishlist);
    localStorage.setItem('wishlist', wishlistStr);
};

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [cartList, setCartList] = useState([]);
    const [wishList, setWishList] = useState([]);
    const allData = useLoaderData();

    // Load Cart
    useEffect(() => {
        const storedCart = getStoredCartList();
        const storedCartInt = storedCart.map(id => parseInt(id));
        const storedCartList = allData.filter(data => storedCartInt.includes(data.id));
        setCartList(storedCartList);
    }, [allData]);

    // Load Wishlist
    useEffect(() => {
        const wishedList = getStoredWishlist();
        const wishedListInt = wishedList.map(id => parseInt(id));
        const wishedAllList = allData.filter(data => wishedListInt.includes(data.id));
        setWishList(wishedAllList);
    }, [allData]);

    // Delete item from cart and localStorage
    const handleDeleteFromCart = (id) => {
        // Remove the item from the state (cartList)
        const updatedCartList = cartList.filter(item => item.id !== id);
        setCartList(updatedCartList);

        // Get the current cart from localStorage and filter out the deleted item
        const storedCart = getStoredCartList();
        const updatedStoredCart = storedCart.filter(itemId => parseInt(itemId) !== id);

        // Update the localStorage with the new cart (after deletion)
        updateStoredCart(updatedStoredCart);
    };

    // Delete item from wishlist and localStorage
    const handleDeleteFromWishlist = (id) => {
        // Remove the item from the state (wishList)
        const updatedWishList = wishList.filter(item => item.id !== id);
        setWishList(updatedWishList);

        // Get the current wishlist from localStorage and filter out the deleted item
        const storedWishlist = getStoredWishlist();
        const updatedStoredWishlist = storedWishlist.filter(itemId => parseInt(itemId) !== id);

        // Update the localStorage with the new wishlist (after deletion)
        updateStoredWishlist(updatedStoredWishlist);
    };

    return (
        <div>
            {/* Heading with Tabs for buttons */}
            <Heading title="Dashboard" subtitle="Explore the latest gadgets...">
                <Tabs selectedIndex={activeTab} onSelect={(index) => setActiveTab(index)}>
                    <TabList className="flex space-x-4 justify-center mt-5">
                        <Tab
                            className={activeTab === 0 ? 'text-[#9538E2] bg-white rounded px-3 py-2' : 'bg-[#9538E2] text-white border-2 rounded px-3 py-2'}
                            onClick={() => setActiveTab(0)}
                        >
                            Cart
                        </Tab>
                        <Tab
                            className={activeTab === 1 ? 'text-[#9538E2] bg-white rounded px-3 py-2' : 'bg-[#9538E2] text-white border-2 rounded px-3 py-2'}
                            onClick={() => setActiveTab(1)}
                        >
                            WishList
                        </Tab>
                    </TabList>
                </Tabs>
            </Heading>

            {/* Tab Content outside Heading */}
            <div className="mt-6 text-center">
                {activeTab === 0 && (
                    <div>
                        <h2 className='font-bold'>Cart || Length: {cartList.length}</h2>
                        {cartList.map(product => (
                            <div key={product.id} className="my-4 gap-[800px] flex items-center">
                                <Card product={product} />
                                {/* Centered delete button using flex */}
                                <button
                                    onClick={() => handleDeleteFromCart(product.id)}
                                    className="bg-red-500 text-white py-2 px-4 rounded-full mt-2"
                                >
                                    Delete
                                </button>
                            </div>
                        ))}
                    </div>
                )}
                {activeTab === 1 && (
                    <div>
                        <h2 className='font-bold'>WishList || Length: {wishList.length}</h2>
                        {wishList.map(product => (
                            <div key={product.id} className="my-4 gap-[800px] flex items-center">
                                <Card product={product} />
                                {/* Centered delete button using flex */}
                                <button
                                    onClick={() => handleDeleteFromWishlist(product.id)}
                                    className="bg-red-500 text-white py-2 px-4 rounded-full mt-2"
                                >
                                    Delete
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
