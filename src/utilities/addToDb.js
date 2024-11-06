

const getStoredCartList=()=>{
    const storedCartListStr=localStorage.getItem('cart-list')
    if(storedCartListStr){
          const storedCartList=JSON.parse(storedCartListStr)
          return storedCartList;
    }
    else{
        return [];
    }

}

const addToStoredCartList =(id)=>{
        const storedCartList=getStoredCartList()
        storedCartList.push(id);
        const storedCartListStr=JSON.stringify(storedCartList)
        localStorage.setItem('cart-list',storedCartListStr)
}

//wishlist
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
        const storedWishlistStr = JSON.stringify(storedWishlist);
        localStorage.setItem('wishlist', storedWishlistStr);
        return true; // Indicate that the item was added successfully
    }
    return false; // Indicate that the item was already in the wishlist
};


export {addToStoredCartList,getStoredCartList,addToStoredWishlist, getStoredWishlist}