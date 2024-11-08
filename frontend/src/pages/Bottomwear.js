import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import BottomwearSection from '../components/BottomwearSection';
import FooterSection from '../components/FooterSection';

const Bottomwear = () => {
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
  
  const filteredBottomwear = productsList.filter(product => product.subCategory === 'Bottomwear');

  return (
    <>
      <Navbar />
      <div style={{ marginTop: "150px", marginLeft: "400px" }}>
        <BottomwearSection products={filteredBottomwear} />
      </div>
      <FooterSection />
    </>
  );
};

export default Bottomwear;
