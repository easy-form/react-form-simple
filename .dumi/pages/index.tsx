import React from 'react';

import { GetStarted, Github } from '@components/Hero/ActionButton';
import { CodeLight } from '@components/Hero/CodeLight';
import { Desc } from '@components/Hero/Desc';
import { Feature } from '@components/Hero/Feature';
import { Gif } from '@components/Hero/Gif';

export default function App() {
  return (
    <div>
      {/* <A /> */}
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
          <Gif />
        </div>
        {/* <div style={{ marginTop: '180px' }}>
          <div
            style={{
              fontSize: '38px',
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            在线调试
          </div>
          <ReactFormSandpack />
        </div> */}
      </div>
    </div>
  );
}
