import { Button } from '@/components/ui/button';
import CreateCategoryModal from './CreateCategoryModal';

const ManageCategory = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-xl">Manage Category</h1>
        <CreateCategoryModal />
      </div>
    </div>
  );
};

export default ManageCategory;
