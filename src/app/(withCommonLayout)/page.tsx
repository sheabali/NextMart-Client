'use client';

import React from 'react';
import { useUser } from '@/context/UserContext';

const HomePage = () => {
  const user = useUser();
  console.log(user);

  return (
    <div>
      <h1>This is home page</h1>
    </div>
  );
};

export default HomePage;
