export const getAllProducts = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/products`, {
      next: {
        tags: ['Products'],
      },
    });

    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};
