import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import KitchenSection from '../components/KitchenSection';
import FooterSection from '../components/FooterSection';

const Kitchen = () => {
  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3001/api/products/getProducts')
      .then((res) => res.json())
      .then((data) => setProductsList(data.products))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0 });
    setTimeout(() => {
      setLoading(false);
    }, 400);
  }, [loading]);

  const filteredKitchen = productsList.filter(product => product.subCategory === 'Kitchen');

  return (
    <>
      <Navbar />
      <div style={{ marginTop: "150px", marginLeft: "400px" }}>
        <KitchenSection products={filteredKitchen} />
      </div>
      <FooterSection />
    </>
  );
};

export default Kitchen;
