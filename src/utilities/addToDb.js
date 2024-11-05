

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
export {addToStoredCartList,getStoredCartList}