import AllProducts from '@/components/modules/products';
import ProductBanner from '@/components/modules/products/banner';
import CategoryCard from '@/components/ui/core/CategoryCard';
import NMContainer from '@/components/ui/core/NMContainer';
import { getAllCategory } from '@/services/Category';
import { ICategory } from '@/types';

const AllProductsPage = async () => {
  const { data: categories } = await getAllCategory();
  return (
    <NMContainer>
      <ProductBanner title="All Products" path="Home - Product" />;
      <div className="grid grid-cols-6 gap-8 my-5">
        {categories.map((category: ICategory, idx: number) => (
          <CategoryCard key={idx} category={category} />
        ))}
      </div>
      <AllProducts />
    </NMContainer>
  );
};

export default AllProductsPage;
