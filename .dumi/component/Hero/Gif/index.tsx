import { IconFont } from '@components/IconFont';
import React from 'react';
import useControllerRef from 'react-form-simple/use/useControllerRef';
import './index.less';

export const Gif = React.memo(() => {
  const { gifs } = useControllerRef({
    gifs: [
      {
        path: './code.mp4',
        title: '几行代码就可受控',
        desc: '不需要引入额外的工具, 不需要定义其他的受控代码，只需要简单的引入一个方法, 表单受控就可以自动完成, 你不需要关心受控过程, 只需要知道受控结果。',
        icon: 'code',
      },
      {
        path: './render.mp4',
        title: '隔离渲染, 提升表单响应速度',
        desc: '每个表单项之间的渲染完全隔离, 互不影响, 表单项的渲染不会引起整个容器的渲染, 你只需要在需要的地方订阅最新值就可。',
        extra:
          '可以看到最外层组件的渲染次数只有1次, 且name和age两个表单项之间的渲染相互隔离。name表单字段使用useSubscribe来订阅最新值。',
        icon: 'shandian',
      },
      {
        path: './api.mp4',
        title: '简约的API',
        desc: '不需要记住多余的字符, 只需要简单的记住几个单词便可以开始工作。',
      },
    ],
  });

  const renderGif = gifs.map((g) => (
    <div className="hero-gif">
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {g.icon && (
          <span style={{ marginRight: '6px' }}>
            <IconFont name={g.icon} size={42} />
          </span>
        )}
        <span style={{ fontSize: '38px', fontWeight: '700' }}>{g.title}</span>
      </div>
      <div
        style={{
          marginTop: '15px',
          fontSize: '16px',
          lineHeight: '2',
          letterSpacing: '1px',
        }}
      >
        {g.desc}
      </div>
      <video src={g.path} className="video" controls />
      {g.extra && (
        <div
          style={{ marginTop: '50px', letterSpacing: '1px', textAlign: 'left' }}
        >
          {g.extra}
        </div>
      )}
    </div>
  ));
  return renderGif;
});
export default Gif;
