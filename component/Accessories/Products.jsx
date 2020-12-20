import React, { useState } from 'react';

import slide01 from "../../../src/image/14.jpg";
import slide02 from "../../../src/image/15.jpg";
import slide03 from "../../../src/image/18.jpg";
import slide04 from "../../../src/image/19.jpg";
import slide05 from "../../../src/image/20.jpg";
import slide06 from "../../../src/image/17.jpg";
import slide07 from "../../../src/image/16.jpg";
import slide09 from "../../../src/image/15.jpg";
import slide10 from "../../../src/image/21.jpg";
import slide11 from "../../../src/image/22.jpg";
import slide12 from "../../../src/image/23.jpg";

const JEWELLERY = 'jewellery ';
const UTILITY = 'utility';


export default function Products({ setCart, cart }) {
  const [products] = useState([
    {
      category: UTILITY,
      name: 'Kashmiri chai',
      cost: 80.00,
      image:slide10,
        
    },
    {
        category: UTILITY,
        name: 'Chana sattu Bihar',
        cost: 45.00,
        image:slide11,
          
      },
      {
        category: UTILITY,
        name: 'sarso da saag Punjab',
        cost: 50.00,
        image:slide12,
          
      },
    {
      category: JEWELLERY,
      name: 'Kundan Jhumka',
      cost: 130.00,
      image:slide01,

    },
    {
        category: JEWELLERY,
        name: 'Kaleera',
        cost: 1500,
        image:slide02,

      },
      {
        category: JEWELLERY,
        name: 'Maliha choker',
        cost: 2000,
        image:slide04,
          
      },
      {
        category: JEWELLERY,
        name: 'Zaina jewel',
        cost: 3500,
        image:
         slide06,
      },
      {
        category: JEWELLERY,
        name: 'Sasha ',
        cost: 2500,
        image:slide07,
          
      },
      {
        category: JEWELLERY,
        name: 'Rajashthani',
        cost: 2800,
        image:slide09,
          
      },
  ]);

  const addToCart = (product) => {
    let newCart = [...cart];
    let itemInCart = newCart.find(
      (item) => product.name === item.name
    );
    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      itemInCart = {
        ...product,
        quantity: 1,
      };
      newCart.push(itemInCart);
    }
    setCart(newCart);
  };

  const [category, setCategory] = useState(JEWELLERY);

  const getProductsInCategory = () => {
    return products.filter(
      (product) => product.category === category
    );
  };

  return (
    <>
      <h1>Products</h1>
      Select a category
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value={JEWELLERY}>{JEWELLERY}</option>
        <option value={UTILITY}>{UTILITY}</option>
      </select>
      <div className="products">
        {getProductsInCategory().map((product, idx) => (
          <div className="product" key={idx}>
            <h3>{product.name}</h3>
            <h4>Rs.{product.cost}</h4>
            <img src={product.image} alt={product.name} />
            <button onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
}