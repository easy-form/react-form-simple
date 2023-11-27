import React from 'react';

import { ReactFormSandpack } from '@components/Codesandbox';
import { GetStarted, Github } from '@components/Hero/ActionButton';
import { CodeLight } from '@components/Hero/CodeLight';
import { Desc } from '@components/Hero/Desc';
import { Feature } from '@components/Hero/Feature';

export default function App() {
  return (
    <div>
      {/* <div
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
      </div> */}
      <div
        style={{
          display: 'flex',
          marginTop: '60px',
          position: 'relative',
        }}
      >
        <div style={{ flex: 1 }}>
          <Desc />
          <div style={{ marginTop: '50px' }}>
            <GetStarted />
            <Github />
          </div>
        </div>
        <div>
          <CodeLight />
        </div>
      </div>
      <div style={{ marginTop: '80px' }}>
        <Feature />
        <div style={{ marginTop: '180px' }}>
          <div
            style={{
              fontSize: '38px',
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: '25px',
            }}
          >
            在线调试
          </div>
          <ReactFormSandpack />
        </div>
      </div>
    </div>
  );
}
