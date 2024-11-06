// Cart Functions

const getStoredCartList = () => {
    const storedCartListStr = localStorage.getItem('cart-list');
    if (storedCartListStr) {
        const storedCartList = JSON.parse(storedCartListStr);
        return storedCartList;
    } else {
        return [];
    }
};

const addToStoredCartList = (id) => {
    const storedCartList = getStoredCartList();
    storedCartList.push(id);
    updateStoredCart(storedCartList);
};

// Wishlist Functions

const getStoredWishlist = () => {
    const storedWishlistStr = localStorage.getItem('wishlist');
    if (storedWishlistStr) {
        return JSON.parse(storedWishlistStr);
    } else {
        return [];
    }
};

const addToStoredWishlist = (id) => {
    const storedWishlist = getStoredWishlist();
    if (!storedWishlist.includes(id)) { // Prevent adding duplicate items
        storedWishlist.push(id);
        updateStoredWishlist(storedWishlist);
        return true; // Indicate that the item was added successfully
    }
    return false; // Indicate that the item was already in the wishlist
};

const updateStoredCart = (cartList) => {
    const cartListStr = JSON.stringify(cartList);
    localStorage.setItem('cart-list', cartListStr);
};

const updateStoredWishlist = (wishlist) => {
    const wishlistStr = JSON.stringify(wishlist);
    localStorage.setItem('wishlist', wishlistStr);
};

export { addToStoredCartList, getStoredCartList, addToStoredWishlist, getStoredWishlist,updateStoredCart,updateStoredWishlist };
