import ManageBrands from '@/components/modules/shop/brand';
import { getAllBrand } from '@/services/Brand';

const ProductBrandPage = async () => {
  const { data, meta } = await getAllBrand();
  return (
    <div>
      <ManageBrands brands={data} />
    </div>
  );
};

export default ProductBrandPage;
