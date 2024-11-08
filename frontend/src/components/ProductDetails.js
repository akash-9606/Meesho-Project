import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart, updateCartCount } from '../actions/CartActions';
import "../styles/ProductDetails.css";

// StarRating Component
const StarRating = ({ rating }) => {
    const stars = Array(5).fill(0); // Create an array of 5 stars
    return (
        <div className="star-rating">
            {stars.map((_, index) => (
                <span key={index} style={{ fontSize: '1.5rem' }}> {/* Increase font size */}
                    {index < rating ? (
                        <i className="fa-solid fa-star text-warning"></i> // Filled star
                    ) : (
                        <i className="fa-regular fa-star text-muted"></i> // Empty star
                    )}
                </span>
            ))}
        </div>
    );
};

const ProductDetails = ({ product }) => {
    const dispatch = useDispatch();
    const [mainImage, setMainImage] = useState(product.images);
    let [selectedSize, setSelectedSize] = useState('');
    let navigate = useNavigate();

    const handleBuyNow = async () => {
        if (!selectedSize) {
            alert("Please select a size before adding to the cart");
            return;
        }

        let loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
        if (loggedInUser) {
            fetch('http://localhost:3001/api/cart/cartAdd', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userId: loggedInUser._id,
                    productId: product._id,
                    quantity: 1,
                    size: selectedSize,
                    product,
                    price: product.price
                })
            }).then(res => res.json()).then((data) => {
                if (data.status === 'success') {
                    alert(data.message);
                    dispatch(updateCartCount(data.cart.items.length));
                } else {
                    alert(data.message);
                }
            });
        } else {
            navigate('/signin');
        }

        dispatch(addToCart(product));
        alert("Item added to the cart");
    };

    let handleSizeSelection = (size) => {
        setSelectedSize(size);
    };

    useEffect(() => {
        setMainImage(product?.images[0]);
    }, [product?.images]);

    return (
        <>
            <Navbar />
            <div className="d-flex justify-content-center" style={{ marginTop: "10%" }}>
                <section id="product-info" className="container mt-5 pe-5">
                    <div className="row justify-content-center">
                        {/* Main Image */}
                        <div className="col-12 col-md-6 d-flex justify-content-center mb-3">
                            <div className="item-image-parent text-center">
                                <div className="item-image-main mb-4 rounded">
                                    <img
                                        src={mainImage}
                                        alt="Main Product"
                                        className="img-fluid"
                                        style={{ width: '100%', height: 'auto', maxHeight: '350px', objectFit: 'cover' }}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Product Info */}
                        <div className="col-12 col-md-4 d-flex flex-column align-items-center">
                            <div className="item-info-parent border rounded-2 p-3 w-100 mb-4">
                            <div className="item-info-parent border rounded-2 ps-2 my-3">
                                    <h6>Product Details</h6>
                                    <p className="my-0" style={{ color: "#666" }}>Name: {product.title}</p>
                                    <p className="my-0" style={{ color: "#666" }}>Category: {product.category}</p>
                                </div>
                                
                                                            <div className="card mt-4">
                                    <div className="card-body">
                                        <h3 className="card-title">Select Size</h3>
                                        {product.sizes.map((el, i) => (
                                            <span
                                                key={i}
                                                className={`btn rounded-btn m-2 ${el === selectedSize ? 'btn-secondary' : 'btn-outline-secondary'}`}
                                                style={{ borderRadius: "40px" }}
                                                onClick={() => handleSizeSelection(el)}
                                            >
                                                {el}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                
                                <div className="main-info">
                                    <p className="text-success">
                                        <span id="price" className="fw-bold fs-4 text-dark">
                                            Rs{product.price}
                                        </span>
                                    </p>
                                </div>

                                {/* Star Rating Component */}
                                <StarRating rating={Math.round(product.rating)} />

                                <div>
                                    <h3 className="btn btn-light btn-sm rounded-pill">Stock Available: {product.stock}</h3>
                                </div>


                                <div className="mt-1">
                                    <span
                                        className="bg-light rounded-pill d-inline-block"
                                        style={{ fontSize: "1.1rem", color: "#666", padding: '5px 10px' }}
                                    >
                                        Free delivery
                                    </span>
                                </div>


                            </div>

                            {/* Buttons Positioned Below Product Info */}
                            <div className="d-flex justify-content-center w-100">
                                <button
                                    className="btn btn-primary text-primary bg-white me-3 mb-2 btn-lg"
                                    style={{ width: '45%' }}
                                    onClick={handleBuyNow}
                                >
                                    Add to Cart
                                </button>
                                <Link className="text-decoration-none" to="/cartpage" style={{ width: '45%' }}>
                                    <button
                                        className="btn btn-success bg-primary btn-lg w-100"
                                        onClick={handleBuyNow}
                                    >
                                        Buy Now
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <hr className='horizontal-line my-4' />
        </>
    );
};

export default ProductDetails;
