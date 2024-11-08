// import React from 'react';
// import "../styles/productscard.css";
// import { Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { setCurrentProduct } from '../actions/setCurrentProduct';

// const ProductsCard = ({ product }) => {
//   const dispatch = useDispatch();
  
//   const handleCurrentProduct = () => {
//     dispatch(setCurrentProduct(product));
//   };

//   // Function to render stars based on the rating
//   const renderStars = (rating) => {
//     const stars = [];
//     const fullStars = Math.floor(rating); // Full stars
//     const halfStar = rating % 1 !== 0; // Half star check

//     // Add full stars
//     for (let i = 0; i < fullStars; i++) {
//       stars.push(<i key={i} className="fa-solid fa-star"></i>);
//     }

//     // Add half star if applicable
//     if (halfStar) {
//       stars.push(<i key="half" className="fa-solid fa-star-half-stroke"></i>);
//     }

//     // Add empty stars (if the rating is less than 5)
//     for (let i = fullStars + (halfStar ? 1 : 0); i < 5; i++) {
//       stars.push(<i key={i} className="fa-regular fa-star"></i>);
//     }

//     return stars;
//   };

//   return (
//     <Link 
//       className='text-decoration-none' 
//       to={{ pathname: "/details/" }} 
//       onClick={handleCurrentProduct}
//     >
//       <div className="product-card d-flex flex-column p-3" style={{ height: '340px', maxHeight: '350px' }}>
//         <div className="product h-50">
//           <img 
//             src={product.images[0]} 
//             alt="" 
//             className="img-fluid" 
//             style={{ height: '100%', objectFit: 'cover' }} 
//           />
//         </div>

//         <div className="flex-grow-1 d-flex flex-column justify-content-between">
//           <div className="title pt-2 pb-1" style={{ fontSize: "0.8rem", color: "#777" }}>
//             {product.title}
//           </div>

//           <div className="price fs-5" style={{ color: "black" }}>
//             Rs {product.price}
//             <span style={{ fontSize: "0.6rem", color: "#777", paddingLeft: "4px" }}>onwards</span>
//             {product.stock === 0 ? 
//               <p className="btn btn-danger text-light btn-sm rounded-pill">sold out</p> 
//               : null}
//           </div>

//           <span className="bg-light rounded-pill" style={{ fontSize: "0.7rem", color: "#666", width: "70px", display: "inline-block" }}>
//             Free delivery
//           </span>

//           <div className="product-rating my-2">
//             <div className="d-flex align-items-center">
//               {renderStars(product.rating)} {/* Render stars here */}
//             </div>
//           </div>

//           <span style={{ fontSize: "0.7rem", color: "#666" }}>
//             <span className="ps-1">{product.reviews} Reviews</span>
//           </span>
//         </div>
//       </div>
//     </Link>
//   );
// };

// export default ProductsCard;

import React from 'react';
import "../styles/productscard.css";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCurrentProduct } from '../actions/setCurrentProduct';

const ProductsCard = ({ product }) => {
  const dispatch = useDispatch();
  
  const handleCurrentProduct = () => {
    dispatch(setCurrentProduct(product));
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={i} className="fa-solid fa-star"></i>);
    }

    if (halfStar) {
      stars.push(<i key="half" className="fa-solid fa-star-half-stroke"></i>);
    }

    for (let i = fullStars + (halfStar ? 1 : 0); i < 5; i++) {
      stars.push(<i key={i} className="fa-regular fa-star"></i>);
    }

    return stars;
  };

  return (
    <Link 
      className='text-decoration-none' 
      to={{ pathname: "/details/" }} 
      onClick={handleCurrentProduct}
    >
      <div className="product-card d-flex flex-column p-3" style={{ height: '340px', maxHeight: '350px' }}>
        <div className="product h-50">
          <img 
            src={product.images[0]} 
            alt="" 
            className="img-fluid" 
            style={{ height: '100%', objectFit: 'cover' }} 
          />
        </div>

        <div className="flex-grow-1 d-flex flex-column justify-content-between">
          <div className="title pt-2 pb-1" style={{ fontSize: "0.8rem", color: "#777" }}>
            {product.title}
          </div>

          <div className="price fs-5" style={{ color: "black" }}>
            Rs {product.price}
            <span style={{ fontSize: "0.6rem", color: "#777", paddingLeft: "4px" }}>onwards</span>
            {product.stock === 0 ? 
              <p className="btn btn-danger text-light btn-sm rounded-pill">sold out</p> 
              : null}
          </div>

          <span className="bg-light rounded-pill" style={{ fontSize: "0.7rem", color: "#666", width: "70px", display: "inline-block" }}>
            Free delivery
          </span>

          <div className="product-rating my-2">
            <div className="d-flex align-items-center">
              {renderStars(product.rating)}
            </div>
          </div>

          <span style={{ fontSize: "0.7rem", color: "#666" }}>
            <span className="ps-1">{product.reviews} Reviews</span>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProductsCard;
