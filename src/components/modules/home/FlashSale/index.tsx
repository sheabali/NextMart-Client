import { Button } from '@/components/ui/button';

import NMContainer from '@/components/ui/core/NMContainer';
import ProductCard from '@/components/ui/core/ProductCard';

import { getAllCategory } from '@/services/Category';
import { getFlashSaleProducts } from '@/services/FlashSale';

import { ICategory, IProduct } from '@/types';
import Link from 'next/link';

const FlashSale = async () => {
  const { data: product } = await getFlashSaleProducts();
  return (
    <NMContainer>
      <div className="mx-auto my-20">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-2xl">Flash Sale</h2>
          <Link href="/products">
            <Button variant="outline" className="rounded-full">
              View All
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-4 gap-8 my-5">
          {product?.slice(0, 4).map((product: IProduct, idx: number) => (
            <ProductCard key={idx} product={product} />
          ))}
        </div>
      </div>
    </NMContainer>
  );
};

export default FlashSale;
