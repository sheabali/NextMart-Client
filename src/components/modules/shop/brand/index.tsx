'use client';

import { Trash } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import CreateBrandModal from './CreateBrandModal';
import { toast } from 'sonner';

const ManageBrands = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">Manage Brands</h1>

        <CreateBrandModal />
      </div>
    </div>
  );
};

export default ManageBrands;
