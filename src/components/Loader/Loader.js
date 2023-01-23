import React from 'react';
import { ThreeDots } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div
      style={{
        position: 'fixed',
        left: '50%',
        top: '98%',
        transform: 'translate(-50%,-50%)',
      }}
    >
      <ThreeDots color="#3f51b5" width={80} height={80} />
    </div>
  );
};

export default Loader;
