import React from 'react'
import FoodItem from './FoodItem'
const FoodList = ({ foods, onAddToCart }) => {
    return (
        <div>
            {foods.map((food) => (
                <FoodItem key={food.id} food={food} onAddToCart={onAddToCart} />
            ))}
        </div>)
}

export default FoodList