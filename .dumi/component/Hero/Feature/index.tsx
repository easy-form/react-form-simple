import { IconFont } from '@components/IconFont';
import React from 'react';
import { useControllerRef } from 'react-form-simple/use/useControllerRef';
import { useLocalFormat } from 'useLocalFormat';
import './index.less';

export const Feature = React.memo(() => {
  const { format, isLocalZH_CN } = useLocalFormat();
  const { icons } = useControllerRef({
    icons: [
      {
        name: 'jiekou',
        title: format({ id: 'hero.feature.APITitle' }),
        desc: format({ id: 'hero.feature.API' }),
      },
      {
        name: 'code',
        title: format({ id: 'hero.feature.codeTitle' }),
        desc: format({ id: 'hero.feature.code' }),
      },
      {
        name: 'shandian',
        title: format({ id: 'hero.feature.speedTitle' }),
        desc: format({ id: 'hero.feature.speed' }),
      },
      {
        name: 'kuozhan',
        title: format({ id: 'hero.feature.interfaceTilte' }),
        desc: format({ id: 'hero.feature.interface' }),
      },
      {
        name: 'buju',
        title: format({ id: 'hero.feature.layoutTitle' }),
        desc: format({ id: 'hero.feature.layout' }),
      },
      {
        name: 'T',
        title: format({ id: 'hero.feature.typeTitle' }),
        desc: format({ id: 'hero.feature.type' }),
      },
    ],
  });

  const _isLocalZH_CN = isLocalZH_CN();

  const renderIcon = icons.map((i) => (
    <div className="feature-item">
      <div style={{ padding: '0 20px' }}>
        <IconFont name={i.name} size={45} />
        <div style={{ fontSize: '23px', marginTop: '6px' }}>{i.title}</div>
        <div
          className="feature-item_desc"
          style={{
            marginTop: '15px',
            fontSize: '16px',
            lineHeight: '1.5',
            ...(_isLocalZH_CN
              ? {
                  letterSpacing: '1px',
                }
              : {}),
          }}
        >
          {i.desc}
        </div>
      </div>
    </div>
  ));

  return <div className="feature-contanier">{renderIcon}</div>;
});

export default Feature;
