'use client';
import CreateCategoryModal from './CreateCategoryModal';

import { NMTable } from '@/components/ui/core/NMTable';
import { ColumnDef } from '@tanstack/react-table';
import { ICategory } from '@/types';
import Image from 'next/image';
import { Trash } from 'lucide-react';
import { useState } from 'react';
import { deleteCategory } from '@/services/Category';
import { toast } from 'sonner';
import DeleteConfirmationModal from '@/components/ui/core/NMModal/DeleteConfirmationModal';
import { tuple } from 'zod';
import TablePagination from '@/components/ui/core/NMTable/TablePagination';

type TCategoriesProps = {
  categories: ICategory[];
};

const ManageCategory = ({ categories }: TCategoriesProps) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleDelete = (data: ICategory) => {
    console.log(data);
    setSelectedId(data?._id);
    setSelectedItem(data?.name);
    setModalOpen(true);
  };

  const handleDeleteConfirm = async () => {
    try {
      if (selectedId) {
        const res = await deleteCategory(selectedId);

        if (res.success) {
          toast.success(res.message);
          setModalOpen(false);
        } else {
          toast.error(res.message);
        }
      }
    } catch (err: any) {
      console.error(err?.message);
    }
  };

  const columns: ColumnDef<ICategory>[] = [
    {
      accessorKey: 'name',
      header: () => <div>Category Name</div>,
      cell: ({ row }) => (
        <div className="flex items-center space-x-3">
          <Image
            src={row.original.icon}
            alt={row.original.name}
            width={40}
            height={40}
            className="w-8 h-8 rounded-full"
          />
          <span className="truncate">{row.original.name}</span>
        </div>
      ),
    },
    {
      accessorKey: 'isActive',
      header: () => <div>isActive</div>,
      cell: ({ row }) => (
        <div>
          {row.original.isActive ? (
            <p className="text-green-500 border bg-green-100 w-14 text-center px-1 rounded">
              True
            </p>
          ) : (
            <p className="text-red-500 border bg-red-100 w-14 text-center px-1 rounded">
              False
            </p>
          )}
        </div>
      ),
    },
    {
      accessorKey: 'action',
      header: () => <div>Action</div>,
      cell: ({ row }) => (
        <button className="text-red-500" title="Delete">
          <Trash
            onClick={() => handleDelete(row.original)}
            className="w-5 h-5"
          />
        </button>
      ),
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-xl">Manage Category</h1>
        <CreateCategoryModal />
      </div>
      <NMTable data={categories || []} columns={columns} />
      <DeleteConfirmationModal
        isOpen={isModalOpen}
        name={selectedItem}
        onOpenChange={setModalOpen}
        onConfirm={handleDeleteConfirm}
      />
      <TablePagination />
    </div>
  );
};

export default ManageCategory;
