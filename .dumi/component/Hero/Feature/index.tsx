import { IconFont } from '@components/IconFont';
import React from 'react';
import { useControllerRef } from 'react-form-simple/use/useControllerRef';
import './index.less';

export const Feature = React.memo(() => {
  const { icons } = useControllerRef({
    icons: [
      {
        name: 'jiekou',
        title: 'API设计',
        desc: '名称简单且完整的API设计, 可以构建个性化表单。',
      },
      {
        name: 'code',
        title: '简约代码',
        desc: '简单的几行代码, 就可使表单成为受控,无需开发人员关心受控过程。',
      },
      {
        name: 'shandian',
        title: '响应速度',
        desc: '渲染完全隔离, 快速的响应表单内容的输入。',
      },
      {
        name: 'kuozhan',
        title: '接口扩展',
        desc: '易于扩展, 提供生命周期, 使开发人员定制自己的表单以及受控逻辑。',
      },
      {
        name: 'buju',
        title: '页面布局',
        desc: '灵活自由的布局组合, 提供布局props, 开发人员可无需手写布局, 也可自由布置。',
      },
      {
        name: 'T',
        title: '类型推断',
        desc: '提供完整的类型推断, 表单模型数据推断。',
      },
    ],
  });

  const renderIcon = icons.map((i) => (
    <div className="feature-item">
      <div style={{ padding: '0 20px' }}>
        <IconFont name={i.name} size={45} />
        <div style={{ fontSize: '23px', marginTop: '6px' }}>{i.title}</div>
        <div
          style={{
            marginTop: '15px',
            fontSize: '15px',
            lineHeight: '1.5',
            letterSpacing: '1px',
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
