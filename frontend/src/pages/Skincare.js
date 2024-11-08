import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Skincaresection from '../components/SkincareSection';
import FooterSection from '../components/FooterSection';

const Skincare = () => {
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

  const filteredSkincare = productsList.filter(product => product.subCategory === 'Skincare');

  return (
    <>
      <Navbar />
      <div style={{ marginTop: "150px", marginLeft: "400px" }}>
        <Skincaresection products={filteredSkincare} />
      </div>
      <FooterSection />
    </>
  );
};

export default Skincare;
