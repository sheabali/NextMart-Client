import { IBrand, ICategory } from '@/types';
import Image from 'next/image';

const BrandCard = ({ brand }: { brand: IBrand }) => {
  return (
    <div className="bg-white bg-opacity-50 border-2 border-white rounded-2xl text-center p-6 h-44">
      <Image
        src={brand?.logo}
        width={100}
        height={150}
        alt="category icon"
        className="mx-auto"
      />
      <h3 className="text-lg font-semibold truncate mt-3">{brand?.name}</h3>
    </div>
  );
};

export default BrandCard;
