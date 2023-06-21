import React from 'react'

const FoodItem = ({ food, onAddToCart }) => {
    return (
        <div className="p-4 bg-white shadow-md rounded-lg mb-4">
            <img className='w-20 h-20' src={food.img} />
            <h2 className="text-lg mb-2">{food.name}</h2>
            <p className="text-gray-600">{food.description}</p>
            <p className="text-gray-700 font-bold mt-2">Price: {food.price}</p>
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                onClick={() => onAddToCart(food)}
            >
                Add to Cart
            </button>
        </div>
    )
}

export default FoodItem