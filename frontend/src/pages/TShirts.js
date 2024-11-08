import React, { useEffect, useState } from 'react';
import Navbar from "../components/Navbar";
import FooterSection from '../components/FooterSection';
import TshirtsSection from '../components/TshirtsSection';

const TShirts = () => {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/products/getProducts')
      .then((res) => res.json())
      .then((data) => setProductsList(data.products))
      .catch((err) => console.log(err));
  }, []);

  const filteredTshirts = productsList.filter(product => product.subCategory === 'tshirts');

  return (
    <>
      <Navbar />
      <div style={{ marginTop: "150px", marginLeft: "400px" }}>
        <TshirtsSection products={filteredTshirts} />
      </div>
      <FooterSection />
    </>
  );
};

export default TShirts;
