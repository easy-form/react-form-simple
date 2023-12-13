import { ReactFormSandpack } from '@components/Codesandbox';
import { GetStarted, Github } from '@components/Hero/ActionButton';
import { CodeLight } from '@components/Hero/CodeLight';
import { Desc } from '@components/Hero/Desc';
import { Feature } from '@components/Hero/Feature';
import React from 'react';
import { useLocalFormat } from 'useLocalFormat';
// import Demo from '@components/Hero/Gif/Demo';

export default function App() {
  const { format } = useLocalFormat();
  return (
    <div>
      {/* <Demo /> */}
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
        {/* <Gif /> */}
        <div style={{ marginTop: '180px' }}>{/* <Design /> */}</div>
        <div style={{ marginTop: '180px', marginBottom: '180px' }}>
          <div
            style={{
              fontSize: '38px',
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: '25px',
            }}
          >
            {format({ id: 'hero.feature.sandPackage' })}
          </div>
          <ReactFormSandpack />
        </div>
      </div>
    </div>
  );
}
