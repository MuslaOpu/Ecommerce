import React from 'react';
import {Row } from 'reactstrap';
import ProductCard from './ProductCard';


const Productslist = ({ data }) => {
  return (
    <>
      <Row>
        {data?.map((item, index)=>(
            <ProductCard item={item} key={index}/>
        ))}
      </Row>
  </>
     
  );
};

export default Productslist