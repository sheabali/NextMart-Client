import AllProducts from '@/components/modules/products';
import ProductBanner from '@/components/modules/products/banner';
import CategoryCard from '@/components/ui/core/CategoryCard';
import NMContainer from '@/components/ui/core/NMContainer';
import ProductCard from '@/components/ui/core/ProductCard';
import { getAllCategory } from '@/services/Category';
import { getAllProducts } from '@/services/Product';
import { ICategory, IProduct } from '@/types';

const AllProductsPage = async () => {
  const { data: categories } = await getAllCategory();

  const { data: products } = await getAllProducts();

  return (
    <NMContainer>
      <ProductBanner title="All Products" path="Home - Product" />;
      <div className="grid grid-cols-6 gap-8 my-5">
        {categories.map((category: ICategory, idx: number) => (
          <CategoryCard key={idx} category={category} />
        ))}
      </div>
      <AllProducts products={products} />
    </NMContainer>
  );
};

export default AllProductsPage;
