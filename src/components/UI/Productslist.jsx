import React from 'react';
import {Row } from 'reactstrap';
import ProductCard from './ProductCard';


const Productslist = ({ data }) => {
  return (
    <>
      <Row>
        {data?.map((item)=>(
            <ProductCard item={item}/>
        ))}
      </Row>
  </>
     
  );
};

export default Productslist