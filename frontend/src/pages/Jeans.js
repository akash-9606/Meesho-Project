import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import JeansSections from '../components/JeansSections';
import FooterSection from '../components/FooterSection';

const Jeans = () => {
  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState([]);
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
  },[loading])

  const filteredJeans = productsList.filter(product => product.subCategory === 'menjeans');

  return (
    <>
      <Navbar />
      <div style={{ marginTop: "150px", marginLeft: "400px" }}>
        <JeansSections products={filteredJeans} />
      </div>
      <FooterSection />
    </>
  );
};

export default Jeans;
