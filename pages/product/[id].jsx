import React from 'react';
import { useRouter } from 'next/router';

const ProductItem = () => {
  const {
    query: { id },
  } = useRouter();
  return (
    <>
      <h1>Product Item with id: {id}</h1>
    </>
  );
};

export default ProductItem;
