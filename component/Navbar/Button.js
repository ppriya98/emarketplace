import React from 'react';
import '../Navbar/Button.css';
import { Link } from 'react-router-dom';

export function Button() {
  return (
    <Link to='sign-up'>
      <button className='btn'>Sign Up</button>
      
    {/* </Link> */}
    
  <Link to='seller'>
    <button className='btn'>SELLER +</button>
  </Link>

    <Link to='products'>
    <button className='btn'>Products</button>
  </Link>

  <Link to='services'>
    <button className='btn'>Services</button>
  </Link>
  </Link>
  );
}