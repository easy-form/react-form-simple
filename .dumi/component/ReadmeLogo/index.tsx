import React from 'react';

export default function ReadmeLogo() {
  return (
    <div
      style={{
        textAlign: 'center',
        marginTop: '60px',
        fontSize: '58px',
        color: 'hsl(261, 80%, 68%)',
      }}
    >
      <span style={{ textShadow: '6px 12px 6px rgba(0, 0, 0, 0.8)' }}>
        React-form-simple
      </span>
      <div
        style={{
          color: '#e7e9ed',
          fontSize: '20px',
          marginTop: '15px',
          letterSpacing: '1px',
        }}
      >
        A form library for quickly controlling react form input
      </div>
    </div>
  );
}
