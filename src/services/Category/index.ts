'use server';

import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';

export const getAllCategory = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/category`, {
      next: {
        tags: ['Category'],
      },
    });

    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

export const createCategory = async (data: FormData) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/category`, {
      method: 'POST',
      headers: {
        Authorization: (await cookies()).get('accessToken')!.value,
      },
      body: data,
    });
    revalidateTag('Category');
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

export const deleteCategory = async (categoryId: string): Promise<any> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/category/${categoryId}`,
      {
        method: 'DELETE',
        headers: {
          Authorization: (await cookies()).get('accessToken')!.value,
        },
      }
    );

    revalidateTag('Category');
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};
