import { useEffect } from "react";
import { useState } from "react";
import { addToLS, getStoredCart } from "../../utilities/localstorage";
import Bottle from "../Bottle/Bottle";
import Cart from "../Cart/Cart";
import './Bottles.css';

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data));
    }, []);

    //load cart from local local storage
    useEffect(() => {
        if (bottles.length) {
            const storedCart = getStoredCart();
            console.log(storedCart, bottles);

            const savedCart = [];

            for (const id of storedCart) {
                console.log(id);
                const bottle = bottles.find(bottle => bottle.id === id);
                if (bottle) {
                    savedCart.push(bottle);             
                }
            }
            setCart(savedCart);
        }
    },[bottles])

    const handleAddToCart = bottle => {
        const newCart = [...cart, bottle];
        setCart(newCart);
        addToLS(bottle.id);
}

    return (
        <div>
            <h2>Bottles Here: {bottles.length}</h2>
            <Cart></Cart>
            <div className="bottle-container">
            {
        bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle} handleAddToCart={handleAddToCart}></Bottle>)
      }
          </div>
        </div>
    );
};

export default Bottles;