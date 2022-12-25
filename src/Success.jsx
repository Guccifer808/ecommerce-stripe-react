import React from 'react';

const Success = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          height: '50vh',
          width: '50vw',
          backgroundColor: 'lightblue',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <h1
          style={{
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center',
          }}
        >
          Payment is successfull
        </h1>
      </div>
    </div>
  );
};

export default Success;
