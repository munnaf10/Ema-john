

const Products = (props) => {
    const { handleToClick, product } = props
    const { seller, price, img, ratings, name } = product


    return (

        <div className=" bg-base-100 shadow-xl">
            <figure className="px-5 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className=" items-center text-center">
                <h2 >{name}</h2>
                <p> Brand :{seller} </p>
                <p>Ratting :{ratings}</p>
                <p>Price :{price}</p>
                <div>
                    <button onClick={() => handleToClick(product)} className="bg-slate-500 hover:bg-slate-900 mb-5 transition-all duration-300 text-white px-4 py-2 rounded-md">Add To Card</button>
                </div>
            </div>
        </div>

    );
};

export default Products;