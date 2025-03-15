import ProductBanner from '@/components/modules/products/banner';
import ProductDetails from '@/components/modules/products/productDetails';
import NMContainer from '@/components/ui/core/NMContainer';
import { getAllProducts, getSingleProduct } from '@/services/Product';
import React from 'react';

const ProductDetailsPage = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params;
  const { data: product } = await getSingleProduct(productId);

  return (
    <NMContainer>
      <ProductBanner
        title="Product - Details"
        path="Home - Product - Product Details"
      />
      <ProductDetails product={product} />
    </NMContainer>
  );
};

export default ProductDetailsPage;
