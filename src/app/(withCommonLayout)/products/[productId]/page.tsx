import React from 'react';

const ProductDetailsPage = async ({
  params,
}: {
  params: { productId: string };
}) => {
  console.log(params);
  return <div>{params.productId}</div>;
};

export default ProductDetailsPage;
