'use server';

import { getValidToken, isTokenExpired } from '@/lib/verifyToken';
import { revalidateTag } from 'next/cache';

export const createBrand = async (data: FormData) => {
  const token = await getValidToken();

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/brand`, {
      method: 'POST',
      headers: {
        Authorization: token,
      },
      body: data,
    });
    revalidateTag('Brands');
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};
export const getAllBrand = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/brand`, {
      next: {
        tags: ['Brands'],
      },
    });

    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

// delete brand
export const deleteBrand = async (brandId: string): Promise<any> => {
  const token = await getValidToken();

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/brand/${brandId}`,
      {
        method: 'DELETE',
        headers: {
          Authorization: token,
        },
      }
    );
    revalidateTag('Brands');
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};
