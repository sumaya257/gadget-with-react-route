import React, { useEffect, useState } from 'react';
import Heading from '../components/Heading';
import { Tab, Tabs, TabList } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { getStoredCartList, getStoredWishlist, updateStoredCart, updateStoredWishlist } from '../utilities/addToDb';
import Card from '../components/Card';
import Modal from 'react-modal';
import { Helmet } from 'react-helmet';

// Configure Modal
Modal.setAppElement('#root');

const Dashboard = () => {

    const [activeTab, setActiveTab] = useState(0);
    const [cartList, setCartList] = useState([]);
    const [wishList, setWishList] = useState([]);
    const [totalCost, setTotalCost] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();
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

    // Calculate total cost of cart items whenever cartList changes
    useEffect(() => {
        const cost = cartList.reduce((acc, item) => acc + item.price, 0);
        setTotalCost(cost);
    }, [cartList]);

    // Sort cart items by price in descending order
    const handleSortByPrice = () => {
        const sortedCartList = [...cartList].sort((a, b) => b.price - a.price);
        setCartList(sortedCartList);
    };

    // Clear cart on purchase and open modal
    const handlePurchase = () => {
        setCartList([]); // Clear cart
        updateStoredCart([]); // Clear cart in localStorage
        setTotalCost(0); // Reset total cost
        setIsModalOpen(true); // Open modal to congratulate
    };

    // Delete item from cart and localStorage
    const handleDeleteFromCart = (id) => {
        const updatedCartList = cartList.filter(item => item.id !== id);
        setCartList(updatedCartList);
        const storedCart = getStoredCartList();
        const updatedStoredCart = storedCart.filter(itemId => parseInt(itemId) !== id);
        updateStoredCart(updatedStoredCart);
    };

    // Delete item from wishlist and localStorage
    const handleDeleteFromWishlist = (id) => {
        const updatedWishList = wishList.filter(item => item.id !== id);
        setWishList(updatedWishList);
        const storedWishlist = getStoredWishlist();
        const updatedStoredWishlist = storedWishlist.filter(itemId => parseInt(itemId) !== id);
        updateStoredWishlist(updatedStoredWishlist);
    };

    // Close modal and navigate to home
    const handleCloseModal = () => {
        setIsModalOpen(false);
        navigate('/'); // Redirect to home page
    };

    return (
        <div>
            <Helmet>
                {/* Set the favicon */}
                <title>DashBoard || Gadget</title>
            </Helmet>
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
                        <h2 className='font-bold mb-5'>Cart || Length: {cartList.length}</h2>
                        <button className='btn mr-4'>{`Total Cost: $${totalCost}`}</button>
                        <button onClick={handleSortByPrice} className='btn mr-4 text-[#9538E2] bg-white'>Sort By Price</button>
                        <button
                            onClick={handlePurchase}
                            className='btn bg-[#9538E2] text-white'
                            disabled={cartList.length === 0 || totalCost === 0} // Disable condition
                        >
                            Purchase
                        </button>
                        {cartList.map(product => (
                            <div key={product.id} className="my-4 gap-[800px] flex items-center">
                                <Card product={product} />
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

            {/* Purchase Confirmation Modal */}
            <Modal
                isOpen={isModalOpen}
                onRequestClose={handleCloseModal}
                contentLabel="Purchase Confirmation"
                className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full mx-auto transform -translate-y-1/2 -translate-x-1/2 top-1/2 left-1/2 absolute"
                overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
            >
                <h2 className="text-2xl font-bold mb-4">Congratulations on Your Purchase!</h2>
                <p className="text-gray-600">Your cart has been cleared, and your items will be on the way soon!</p>
                <button onClick={handleCloseModal} className="btn bg-green-500 text-white mt-4 px-4 py-2 rounded">
                    Close
                </button>
            </Modal>

        </div>
    );
};

export default Dashboard;
