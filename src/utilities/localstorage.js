const getStoredCart = () => {
    const cartString = localStorage.getItem('cart');
    if (cartString) {                       //local storage e ache string hishabe
        return JSON.parse(cartString);          //json e parse kore nilam data
    }
    return [];                          //if er vitore na gele empty array debe result e
}


//Abar item store korar jonno array ba cart nebo
const saveCartToLS = cart => {
    const cartStringField = JSON.stringify(cart); //local storage erakhte hobe string kore
    localStorage.setItem('cart', cartStringField); // ekta name diye  store kore fekbo
}



//item save kora jonno jake add korbo take (id) ke nebo
const addToLS = id => {
    const cart = getStoredCart();  //cart ke khuje ber korbo
    cart.push(id); //item ke push kore debo
    //save to local storage
    saveCartToLS(cart); //function ke call kore dile 12 no line e jeye string e convert korar pore 13 no. line e save kore debe.
}



const removeFromLocalStorage = id => {
    const cart = getStoredCart();
    const remaining = cart.filter(idx => idx !== id); //removing every id
    saveCartToLS(remaining);
}

export {addToLS, getStoredCart, removeFromLocalStorage}