import React, { useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';
import Navabr from './componant/navabr/Navabr';
import PosterImg from './pages/posterimg/PosterImg';
import SliderCart from './componant/cartSlider/Slider';
import data from './utility/data';
import { Box } from '@mui/material';
import CarList from './pages/main/CarList';
import Custmer from './pages/customer/Custmer';
// import Footer from './componant/footer/Footer';
function App() {
  return (
    <>
      <Navabr />
      <PosterImg />
      {/* <Box> */}
      <SliderCart data={data} />
      <CarList />
      <Custmer />
      {/* <Footer /> */}
      {/* </Box> */}
      {/* <div className="App">
        <h1>Well Come</h1>
        <SearchInput products={PRODUCTS} />
        <h1 className="text-2xl font-bold underline">
          Hello world!
        </h1>
        <div className='md:container md:mx-auto'>
          <ToDoList />
        </div>
      </div>
      <div>
        <Cart />
      </div> */}
    </>
  );
}

export default App;

const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
];