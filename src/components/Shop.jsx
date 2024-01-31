import { useEffect } from "react";
import { useState } from "react";
import Products from './Products'
import Cart from "./Cart";



const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('../../public/products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const handleToClick = (product) => {
        console.log(product)
        const newCart = [...cart, product]
        setCart(newCart)
    }
    return (
        <div className="grid grid-cols-12 mt">
            <div className="col-span-8">

                <div className="grid grid-cols-3 gap-4 ml-10">
                    {
                        products.map(product => <Products
                            key={product.id}
                            product={product}
                            handleToClick={handleToClick}
                        />)
                    }
                </div>
            </div>
            <div className="col-span-4">
                <div className="ml-16 bg-red-600 text-white p-9 rounded">
                    <Cart cart={cart} />
                </div>
            </div>

        </div>
    );
};

export default Shop;