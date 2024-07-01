import Button from '@components/Button';
import { GetStarted, Github } from '@components/Hero/ActionButton';
import { CodeLight } from '@components/Hero/CodeLight';
import { Desc } from '@components/Hero/Desc';
import { Feature } from '@components/Hero/Feature';
import { TextWrap } from '@components/Hero/TextWrap';
import { history, useLocale } from 'dumi';
import React from 'react';
// import Zoom from 'react-reveal/Zoom';
import { useLocalFormat } from 'useLocalFormat';

import { Zoom } from '@components/Animation';

import { baseModelImg } from './const';

// const Zoom = ({ children }: { children: any }) => <>{children}</>;

// import Demo from '@components/Hero/Gif/Demo';

export default function App() {
  const { format, isDefaultLocal } = useLocalFormat();
  const { base } = useLocale() as any;

  const _base = isDefaultLocal() ? '' : base;
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
          <Zoom>
            <Desc />
          </Zoom>
          <Zoom>
            <div style={{ marginTop: '50px' }}>
              <GetStarted />
              <Github />
            </div>
          </Zoom>
        </div>
        <div>
          <CodeLight />
        </div>
      </div>
      <Zoom>
        <div style={{ marginTop: '80px' }}>
          <Feature />
          {/* <Gif /> */}
          <div style={{ marginTop: '180px' }}>{/* <Design /> */}</div>
          {/* <div style={{ marginTop: '180px', marginBottom: '180px' }}>
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
        </div> */}
        </div>
      </Zoom>
      <TextWrap
        style={{ width: '100%' }}
        title={format({ id: 'hero.text.modelUI.desc' })}
        content={
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ flex: 1 }}>
              {format({ id: 'hero.text.modelUI.content' })}
            </span>
            <span style={{ flex: 1, marginLeft: '10px' }}>
              <img src={baseModelImg} alt="" style={{ width: '100%' }} />
            </span>
          </div>
        }
      />

      <TextWrap
        style={{ width: '50%' }}
        title={format({ id: 'hero.text.watch.title.desc' })}
        content={format({ id: 'hero.text.watch.content.desc' })}
      />

      <TextWrap
        style={{ width: '80%' }}
        title={format({ id: 'hero.text.watch.area.title.desc' })}
        content={format({ id: 'hero.text.watch.area.content.desc' })}
      />

      <TextWrap
        title={format({ id: 'hero.text.try.desc' })}
        style={{ width: '100%', marginTop: '180px' }}
        content={
          <div>
            <Button
              plain
              style={{ padding: '12px 60px', fontSize: '20px' }}
              onClick={() => {
                history.push(`${_base}/intro/start`);
              }}
            >
              {format({ id: 'hero.action.button.start' })}
            </Button>
            <Button
              plain
              style={{
                padding: '12px 60px',
                fontSize: '20px',
                margin: '0 15px',
              }}
              onClick={() => {
                history.push(`${_base}/api/use-form-start`);
              }}
            >
              API
            </Button>
            <Button
              plain
              style={{
                letterSpacing: 0,
                padding: '12px 60px',
                fontSize: '20px',
              }}
              onClick={() => {
                history.push(`${_base}/types/use-form-return`);
              }}
            >
              TS
            </Button>
          </div>
        }
      />
    </div>
  );
}
