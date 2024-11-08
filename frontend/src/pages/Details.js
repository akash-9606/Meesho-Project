import React,{useState,useEffect} from 'react';
import { useSelector } from 'react-redux';
import ProductDetails from '../components/ProductDetails';
import ProductsCard from '../components/ProductsCard';
import FooterSection from '../components/FooterSection';

const Details = () => {
  const product = useSelector((state) => state.currentProduct.product);

  const [products, setProducts] = useState([]); // All products from backend
  const [similarProducts, setSimilarProducts] = useState([]); // Filtered similar products
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    // Fetch products from the backend at port 3001
    fetch('http://localhost:3001/api/products/getProducts')
      .then((res) => res.json())
      .then((productsList) => {
        setProducts(productsList.products); // Update state with products from backend
      })
      .catch((err) => console.log(err));
  }, []);

  
  useEffect(() => {
    window.scrollTo({ top: 0 });
    setTimeout(() => {
      setLoading(false);
    }, 400);

    if (products.length > 0) {
      // Filter similar products by category and exclude current product
      const filteredProducts = products.filter(
        (item) => item.category === product.category && item._id !== product._id
      );
      setSimilarProducts(filteredProducts); // Update state with similar products
    }
  }, [loading, product, products]);

  return (
    <>
      <ProductDetails product={product} />
      
      <div className="container my-4">
        <h4 className='my-2'>Similar Products</h4>
        <div className="row">
          {similarProducts.length > 0 ? (
            similarProducts.map((item) => (
              <div className="col-lg-3 col-md-4 col-sm-6 mb-4 my-4" key={item.id}>
                <ProductsCard product={item} />
              </div>
            ))
          ) : (
            <p>No similar products found</p>
          )}
        </div>
      </div>
      <FooterSection/>
    </>
  );
};

export default Details;
