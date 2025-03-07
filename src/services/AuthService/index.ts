'use server';

import { FieldValues } from 'react-hook-form';

export const registerUser = async (userData: FieldValues) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    return res.json();
  } catch (error: any) {
    console.error(error);
  }
};
