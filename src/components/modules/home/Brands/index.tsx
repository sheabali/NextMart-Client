import { Button } from '@/components/ui/button';
import BrandCard from '@/components/ui/core/BrandCard';
import CategoryCard from '@/components/ui/core/CategoryCard';
import NMContainer from '@/components/ui/core/NMContainer';
import { getAllBrand } from '@/services/Brand';

import { getAllCategory } from '@/services/Category';

import { IBrand, ICategory } from '@/types';
import Link from 'next/link';

const Brands = async () => {
  const { data: brands } = await getAllBrand();
  return (
    <NMContainer>
      <div className=" mx-auto my-20">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-2xl">Brands</h2>
          <Link href="/brands">
            <Button variant="outline" className="rounded-full">
              All Brands
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-6 gap-8 my-5">
          {brands.map((brand: IBrand, idx: number) => (
            <BrandCard key={idx} brand={brand} />
          ))}
        </div>
      </div>
    </NMContainer>
  );
};

export default Brands;
