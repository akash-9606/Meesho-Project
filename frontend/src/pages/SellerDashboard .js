import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import SellerNavbar from "../components/SellerNavbar";
import FooterSection from "../components/FooterSection";

function SellerDashboard() {

  let navigate = useNavigate()

  const [productTitle, setProductTitle] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productSubCategory, setProductSubCategory] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImage, setProductImage] = useState("");
  const [productRating, setProductRating] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productSizes, setProductSizes] = useState([]);
  const [productReviews, setproductReviews] = useState();
  const [productGender, setProductGender] = useState("");
  const [productColors, setProductColors] = useState([]);
  const [stock, setStock] = useState(0);

  let handleSubmit = async (e) => {

    e.preventDefault();

    const formData = {
      // productId,
      title: productTitle,
      category: productCategory,
      subCategory: productSubCategory,
      price: productPrice,
      images: [productImage],
      rating: productRating,
      description: productDescription,
      sizes: productSizes,
      colors: productColors,
      reviews: productReviews,
      gender: productGender,
      stock: stock,
      loggedInUser: JSON.parse(localStorage.getItem('loggedInUser'))
    };


    try {
      const response = await fetch("http://localhost:3001/api/products/addProduct", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {

        const data = await response.json();
        console.log("Product added successfully:", data);
        alert("product added successfully")
        navigate("/sellerViewProduct")

      } else {
        console.error("Failed to add product:", response.statusText);
        alert("failed to add the product")
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }



  return (
    <>
      <SellerNavbar />
      <div className="container mt-5">
        <div className="card text-muted border bg-light rounded  mb-4">
          <div className="card-body">
            <h2 className="text-center mb-4">Add Products</h2>
          </div>
        </div>
        <div className="card border rounded bg-light  p-4 mb-4 bg-white">
          <form onSubmit={handleSubmit}>
            <div className="mb-3 row">
              <label htmlFor="productTitle" className="col-sm-3 col-form-label">Title</label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  id="productTitle"
                  placeholder="Enter Product Title"
                  value={productTitle}
                  onChange={(e) => setProductTitle(e.target.value)}
                />
              </div>
            </div>

            <div className="mb-3 row">
              <label htmlFor="productCategory" className="col-sm-3 col-form-label">Category</label>
              <div className="col-sm-9">
                <select id="productCategory" className="form-select" value={productCategory} onChange={(e) => setProductCategory(e.target.value)}>
                  <option value="" disabled>Select Category</option>
                  <option value="womenethinic">Women Ethnic</option>
                  <option value="womenwestern">Women Western</option>
                  <option value="me">Men</option>
                  <option value="kids">Kids</option>
                  <option value="home&kitchen">Home & Kitchen</option>
                  <option value="beauty&health">Beauty & Health</option>
                  <option value="bags&footwear">Bags & footwear</option>
                  <option value="electronics">Electronics</option>
                </select>
              </div>
            </div>

            <div className="mb-3 row">
              <label htmlFor="productSubCategory" className="col-sm-3 col-form-label">Subcategory</label>
              <div className="col-sm-9">
                <select id="productSubCategory" className="form-select" value={productSubCategory} onChange={(e) => setProductSubCategory(e.target.value)}>
                  <option value="" disabled>Select Subcategory</option>
                  <option value="Sarees">Sarees</option>
                  <option value="Kurti"> Kurti</option>
                  <option value="Topwear">Topwear</option>
                  <option value="Bottomwear">Bottomwear</option>
                  <option value="tshirts">tshirt</option>
                  <option value="menjeans">menjeans</option>
                  <option value="Girls">Girls</option>
                  <option value="Boys">Boys</option>
                  <option value="Kitchen">Kitchen</option>
                  <option value="Makeup">Makeup</option>
                  <option value="Home">Home</option>
                  <option value="Skincare">Skincare</option>
                  <option value="Bags"> Bags</option>
                  <option value="Footwear">Footwear</option>
                  <option value="Electronic">Electronic</option>
                </select>
              </div>
            </div>

            <div className="mb-3 row">
              <label htmlFor="productPrice" className="col-sm-3 col-form-label">Price</label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  id="productPrice"
                  placeholder="Enter Product Price"
                  value={productPrice} onChange={(e) => setProductPrice(e.target.value)}
                />
              </div>
            </div>

            <div className="mb-3 row">
              <label for="productStcok" className="col-sm-3 col-form-label"> Stock</label>
              <div className="col-sm-9">
                <input type="number" className="form-control" id="stock" placeholder="Enter Product stock"
                  value={stock} onChange={(e) => setStock(e.target.value)} />
              </div>

            </div>

            <div className="mb-3 row">
              <label htmlFor="productImage1" className="col-sm-3 col-form-label">Image</label>
              <div className="col-sm-9">
                <input
                  type="url"
                  className="form-control"
                  id="productImage1"
                  placeholder="Enter Image 1 URL"
                  value={productImage} onChange={(e) => setProductImage(e.target.value)}
                />
              </div>
            </div>

            <div className="mb-3 row">
              <label htmlFor="productRating" className="col-sm-3 col-form-label">Rating</label>
              <div className="col-sm-5">
                <input
                  type="text"
                  className="form-control"
                  id="productRating"
                  placeholder="Enter Product Rating"
                  value={productRating} onChange={(e) => setProductRating(e.target.value)}
                />
              </div>
            </div>

            <div className="mb-3 row">
              <label htmlFor="productDescription" className="col-sm-3 col-form-label">Description</label>
              <div className="col-sm-9">
                <textarea
                  className="form-control"
                  id="productDescription"
                  rows="3"
                  placeholder="Enter Product Description"
                  value={productDescription} onChange={(e) => setProductDescription(e.target.value)}
                ></textarea>
              </div>
            </div>

            <div className="mb-3 row">
              <label htmlFor="productReviews" className="col-sm-3 col-form-label">Reviews</label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  id="productReviews"
                  placeholder="Enter Product Reviews"
                  value={productReviews} onChange={(e) => setproductReviews(e.target.value)}
                />
              </div>
            </div>

            <div className="mb-3 row">
              <label htmlFor="productGender" className="col-sm-3 col-form-label">Gender</label>
              <div className="col-sm-9">
                <select
                  id="productGender"
                  className="form-select"
                  value={productGender}
                  onChange={(e) => setProductGender(e.target.value)}
                >
                  <option value="" disabled>Select Gender</option>
                  <option value="Men">Men</option>
                  <option value="Women">Women</option>
                  <option value="Boy">Boy</option>
                  <option value="Girl">Girl</option>
                  <option value="N/A">NA</option>
                </select>
              </div>
            </div>

            <div className="mb-3 row">
              <label htmlFor="productSizes" className="col-sm-3 col-form-label">Sizes</label>
              <div className="col-sm-9">
                <select multiple className="form-select" id="productSizes" value={productSizes}
                  onChange={(e) => setProductSizes([...e.target.selectedOptions].map(option => option.value))}>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="free size">Free Size</option>
                  <option value="Women">NA</option>
                </select>
              </div>
            </div>

            <div className="mb-3 row">
              <label htmlFor="productColor" className="col-sm-3 col-form-label">
                Color
              </label>
              <div className="col-sm-9">
                <select
                  id="productColor"
                  className="form-select"
                  value={productColors}
                  onChange={(e) => setProductColors(e.target.value)}
                >
                  <option value="" disabled>
                    Select Color
                  </option>
                  <option value="Black">Black</option>
                  <option value="Blue">Blue</option>
                  <option value="Green">Green</option>
                  <option value="Red">Red</option>
                  <option value="White">White</option>
                  <option value="Women">NA</option>
                </select>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12 text-center">
                <button type="submit" className="btn btn-primary btn-lg" onClick={handleSubmit}>Add More Products</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <FooterSection />
    </>
  );
}

export default SellerDashboard;
