'use server';

import { isTokenExpired } from '@/lib/verifyToken';
import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';
import { getNewToken } from '../AuthService';

export const createBrand = async (data: FormData) => {
  const cookieStore = await cookies();
  let token = cookieStore.get('accessToken')!.value;
  console.log('form brand', await isTokenExpired(token));

  if (!token || (await isTokenExpired(token))) {
    const { data } = await getNewToken();
    token = data?.accessToken;
    cookieStore.set('accessToken', token);
  }

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
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/brand/${brandId}`,
      {
        method: 'DELETE',
        headers: {
          Authorization: (await cookies()).get('accessToken')!.value,
        },
      }
    );
    revalidateTag('Brands');
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};
