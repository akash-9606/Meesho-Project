import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import BagsSection from '../components/BagsSection';
import FooterSection from '../components/FooterSection';

const Bags = () => {
  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3002/api/products/getProducts')
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

  const filteredBags = productsList.filter(product => product.subCategory === 'Bags');

  return (
    <>
      <Navbar />
      <div style={{ marginTop: "150px", marginLeft: "400px" }}>
        <BagsSection products={filteredBags} />
      </div>
      <FooterSection />
    </>
  );
};

export default Bags;
