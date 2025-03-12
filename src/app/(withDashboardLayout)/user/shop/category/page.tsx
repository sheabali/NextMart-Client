import ManageCategory from '@/components/modules/shop/category';
import { getAllCategory } from '@/services/Category';

const ProductCaregory = async () => {
  const { data, meta } = await getAllCategory();
  console.log(data);

  return (
    <div>
      <ManageCategory categories={data} />
    </div>
  );
};

export default ProductCaregory;
