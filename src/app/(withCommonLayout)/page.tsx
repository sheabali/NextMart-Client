import React from 'react';
import { getCurrentUser } from '@/services/AuthService';

const HomePage = async () => {
  const user = await getCurrentUser();
  console.log(user);

  return (
    <div>
      <h1>This is home page</h1>
    </div>
  );
};

export default HomePage;
