import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Sidebar from './Sidebar';
import ProductsCard from './ProductsCard';

const ProductSection = () => {
  const { searchQuery, sortType, selectedGenders, selectedColors } = useSelector((state) => state.products);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch products from backend when the component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:3001/api/products/getProducts');
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setProducts(data.products); // assuming the response format is { success: true, products: [...] }
      } catch (error) {
        setError('Failed to fetch products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filter and sort products based on search query, category filter, and sort type
  let filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (selectedGenders.length === 0 || selectedGenders.includes(product.gender)) &&
    (selectedColors.length === 0 || selectedColors.includes(product.colors))
  );

  if (sortType === 'lowToHigh') {
    filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortType === 'highToLow') {
    filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="container-fluid my-4">
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-9">
          <div className="row">
            {loading ? (
              <div className="col-12">
                <h4>Loading...</h4>
              </div>
            ) : error ? (
              <div className="col-12">
                <h4>{error}</h4>
              </div>
            ) : filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={product.id}>
                  <ProductsCard product={product} />
                </div>
              ))
            ) : (
              <div className="col-12">
                <h4>No products found</h4>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
