import React, { useState } from 'react'
import FoodList from './FoodList';
const Cart = () => {
    const [cart, setCart] = useState([]);
    const [foods] = useState([
        { id: 1, name: 'Pizza', description: 'Delicious cheese pizza', price: 10, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK6RUdKeSXk0X7Fj7U1gx06qN1U9tGOiUPyQ&usqp=CAU" },
        { id: 2, name: 'Burger', description: 'Juicy beef burger', price: 8, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK6RUdKeSXk0X7Fj7U1gx06qN1U9tGOiUPyQ&usqp=CAU" },
        { id: 3, name: 'Salad', description: 'Fresh green salad', price: 6, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK6RUdKeSXk0X7Fj7U1gx06qN1U9tGOiUPyQ&usqp=CAU" },
    ]);

    const handleAddToCart = (food) => {
        setCart([...cart, food]);
    };

    const List = ({ food, onDelete, intex }) => {
        return (
            // <li key={food.id}>{food.name}</li>,
            // <li ><img className='w-20 h-20' src={food.img} /></li>

            <tr key={food.id}>
                <td>{food.name}</td>
                <td>{food.price}</td>
                <td><img className='w-20 h-20' src={food.img} /></td>
                <td><button className="text-red-500" onClick={onDelete}>Delete</button></td>
            </tr>
        )
    }

    const handleDeleteFood = (index) => {
        const updatedTasks = [...cart];
        updatedTasks.splice(index, 1);
        setCart(updatedTasks);
    };
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl mb-4">Food Ordering</h1>
            <FoodList foods={foods} onAddToCart={handleAddToCart} />
            <div className="mt-4">
                <h2 className="text-xl mb-2">Cart</h2>
                {cart.length === 0 ? (
                    <p>No items in the cart</p>
                ) : (
                    <table class="table-auto">
                        <thead>
                            <tr>
                                <th>name</th>
                                <th>price</th>
                                <th>img</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((food) => (
                                <List food={food} onDelete={handleDeleteFood} />
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}

export default Cart