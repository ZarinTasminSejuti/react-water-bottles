const getStoredCart = () => {
    const cartString = localStorage.getItem('cart');
    if (cartString) {
        return JSON.parse(cartString);
    }
    return [];
}

const addToLS = id => {
    const cart = getStoredCart();
}