import React from 'react';
import './Cards.css';
import CardItem from './CardItem.js';

function Cards() {
  return (
    <div className='cards'>
      <h1>Product Categories</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/18.jpg'
              text='Accessories'
              label='Accessories'
              path='/services'
            />
            <CardItem
              src= 'images/2.jpg'
              text='Apparel'
              label='Apparel'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src= 'images/3.jpg'
              text='Essentials'
              label='Essentials'
              path='/services'
            />
            <CardItem
              src='images/4.jpg'
              text='Bamboo products'
              label='Bamboo products'
              path='/products'
            />
            <CardItem
              src='images/6.jpg'
              text='The real herbs found in various parts of India '
              label='Herbies'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;