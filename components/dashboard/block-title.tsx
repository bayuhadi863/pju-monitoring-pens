import React from 'react';

const BlockTitle = ({ children }: { children: React.ReactNode }) => {
  return <h1 className='font-semibold text-lg'>{children}</h1>;
};

export default BlockTitle;
