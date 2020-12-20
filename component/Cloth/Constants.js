// import React, { useState } from 'react';

// const HOME_GARDEN = 'home and garden';
// const UTILITY = 'utility';

export default [
  // function Products({ setCart, cart }){
  // const [products] = useState([

    {
      title: "Nauvari Saree",
      price: "2000",
      description:
        "The Kaashtha sari is a style of sari draping is very similar to the way the Maharashtrian dhoti is worn.",
     
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/41kQj8q0gAL.jpg"
    },
    {
      title: "Banarasi Silk",
      price: "4000",
      description:
        "A Banarasi sari is a sari made in Varanasi, an ancient city which is also called Benares",
      
      imageUrl:
        "https://cdn.shopify.com/s/files/1/0297/5976/6576/products/21835_700x933.jpg?v=1601484622"
    },
    {
      title: "Bangalore Silk",
      price: "4500",
      description:
        "Bangalore Silk is known for its simplicity, purity, and texture of Silk, which is meticulously produced in the silk farms of Bangalore, Karnataka.",
      
      imageUrl:
        "https://5.imimg.com/data5/SO/EJ/MY-2848580/hand-woven-purple-bangalore-pure-silk-sari-500x500.png"
    },
    {
      title: "Mysore Silk",
      price: "4000",
      description:
        "From the land of silk and sandalwood, comes a fine textile fit for royalty. The Mysore silk saree is manufactured in Karnataka, which happens to be one of the largest mulberry silk producers in the country.",
      
      imageUrl:
        "https://s3-ap-southeast-1.amazonaws.com/assets1.craftsvilla.com/blog/wp-content/uploads/2017/02/01142225/mysore_silk_sarees.jpg"
    },
    {
      title: "Ghaghra Choli",
      price: "1500",
      description:
        "Gagra choli or ghagra choli, which is also known as lehenga choli and locally as chaniya choli, is the traditional clothing of women from Indian Subcontinent",
      
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/91IdgQilzXL._UL1500_.jpg"
    },
    {
      title: "MEKHELA CHADER ",
      price: "2500",
      description:
        'Mekhela Chador  is type of Saree comprising two pieces of cloth, draped on the top and bottom, which is the traditional attire worn by the women of Assam',
     
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/DWIJEN_%2843%29.jpg/250px-DWIJEN_%2843%29.jpg"
    },
  ];
//   const addToCart = (product) => {
//     let newCart = [...cart];
//     let itemInCart = newCart.find(
//       (item) => product.name === item.name
//     );
//     if (itemInCart) {
//       itemInCart.quantity++;
//     } else {
//       itemInCart = {
//         ...product,
//         quantity: 1,
//       };
//       newCart.push(itemInCart);
//     }
//     setCart(newCart);
//   };

//   const [category, setCategory] = useState(HOME_GARDEN);

//   const getProductsInCategory = () => {
//     return products.filter(
//       (product) => product.category === category
//     );
//   };

//   return (
//     <>
//       <h1>Products</h1>
//       Select a category
//       <select onChange={(e) => setCategory(e.target.value)}>
//         <option value={HOME_GARDEN}>{HOME_GARDEN}</option>
//         <option value={UTILITY}>{UTILITY}</option>
//       </select>
//       <div className="products">
//         {getProductsInCategory().map((product, idx) => (
//           <div className="product" key={idx}>
//             <h3>{product.name}</h3>
//             <h4>${product.cost}</h4>
//             <img src={product.image} alt={product.name} />
//             <button onClick={() => addToCart(product)}>
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }