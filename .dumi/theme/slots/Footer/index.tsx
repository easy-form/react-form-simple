import { IconFont } from '@components/IconFont';
import { Box, Popover } from '@mui/material';
import { useSiteData } from 'dumi';
import React, { useImperativeHandle, useRef, useState, type FC } from 'react';
import { useLocalFormat } from 'useLocalFormat';
import './index.less';

const ModalDialog = React.forwardRef((props, ref) => {
  const [src, setSrc] = useState('');
  const [anchorEl, setAnchorE] = useState(null);
  const [, setState] = useState({});

  const open = Boolean(anchorEl);
  useImperativeHandle(ref, () => ({
    show(src: any, target: any) {
      setSrc(src);
      setAnchorE(target);
    },
  }));
  return (
    <Popover
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      open={open}
      anchorEl={anchorEl}
      onClose={() => {
        setAnchorE(null);
      }}
    >
      <img
        src={src}
        alt=""
        style={{ width: '300px' }}
        onLoad={() => {
          setState({});
        }}
      />
    </Popover>
  );
});

const Title = ({ children }: any) => (
  <div style={{ fontSize: '16px' }}>{children}</div>
);

const Footer: FC = () => {
  const { themeConfig } = useSiteData();
  const modalRef = useRef();

  const { resource, friendLink, author, group } = {
    resource: [
      {
        label: 'Github',
        href: 'https://github.com/easy-form/react-form-simple',
      },
      {
        label: '使用案例',
        href: 'https://github.com/easy-form/react-form-simple?tab=readme-ov-file#-demo',
      },
      {
        label: 'react表单受控的实现方案',
        href: 'https://juejin.cn/post/7309692103055867939',
      },
      {
        label: '协议',
        href: 'https://github.com/easy-form/react-form-simple/blob/main/LICENSE',
      },
    ],
    friendLink: [{ label: 'H5-Dooring', href: 'http://h5.dooring.cn/' }],
    author: [
      { label: '@97vack', href: 'https://github.com/97vack' },
      { label: '@liuchuzhang', href: 'https://github.com/liuchuzhang' },
    ],
    group: [
      {
        label: '微信',
        icon: 'weixin',
        size: 20,
        href: 'https://github.com/easy-form/react-form-simple/tree/main?tab=readme-ov-file#join-wechat-group',
      },
    ],
  };

  if (!themeConfig.footer) return null;

  const { format } = useLocalFormat();
  const year = new Date().getFullYear();
  return (
    <>
      <div className="dumi-default-footer">
        <div className="dumi-default-footer-content">
          <div>
            <Title>相关资源</Title>
            <div style={{ marginTop: '20px' }}>
              {resource.map((v) => (
                <div style={{ marginBottom: '10px' }} key={v.href}>
                  <a href={v.href} target="_blank">
                    {v.label}
                  </a>
                  <IconFont
                    name="daochu"
                    color="#fff"
                    size={20}
                    style={{ fontWeight: 'normal', verticalAlign: 'middle' }}
                  />
                </div>
              ))}
            </div>
          </div>
          <div>
            <Title>友情推荐</Title>
            <div style={{ marginTop: '20px' }}>
              {friendLink.map((v) => (
                <div style={{ marginBottom: '10px' }} key={v.href}>
                  <a href={v.href} target="_blank">
                    {v.label}
                  </a>
                  <IconFont
                    name="daochu"
                    color="#fff"
                    size={20}
                    style={{ fontWeight: 'normal', verticalAlign: 'middle' }}
                  />
                </div>
              ))}
            </div>
          </div>
          <div>
            <Title>关于作者</Title>
            <div style={{ marginTop: '20px' }}>
              {author.map((v) => (
                <div style={{ marginBottom: '10px' }} key={v.href}>
                  <a
                    href={v.href}
                    target="_blank"
                    style={{ fontWeight: '600' }}
                  >
                    {v.label}
                  </a>
                  <IconFont
                    name="daochu"
                    color="#fff"
                    size={20}
                    style={{ fontWeight: 'normal', verticalAlign: 'middle' }}
                  />
                </div>
              ))}
            </div>
          </div>
          <div>
            <Title>社群</Title>
            <div style={{ marginTop: '20px' }}>
              {group.map((v) => {
                return (
                  <div style={{ marginBottom: '10px' }} key={v.label}>
                    <a
                      style={{ marginRight: '5px' }}
                      href={v.href}
                      target="_blank"
                    >
                      {v.label}
                    </a>
                    <IconFont
                      name="daochu"
                      color="#fff"
                      size={20}
                      style={{ fontWeight: 'normal', verticalAlign: 'middle' }}
                    />
                    <IconFont
                      name={v.icon}
                      size={v.size}
                      style={{ verticalAlign: 'middle' }}
                    />
                  </div>
                );
              })}
              <div style={{ marginTop: '30px' }}>
                <span style={{ marginRight: '8px' }}>
                  <span style={{}}>进不去群? </span>联系作者 -
                </span>
                <Box
                  className="contact-txt"
                  component="span"
                  style={{
                    marginRight: '6px',
                    cursor: 'pointer',
                  }}
                  sx={{
                    '&:hover': {
                      opacity: '.6',
                    },
                  }}
                  onClick={(e) => {
                    (modalRef.current as any).show(
                      require('./imgs/wx.jpg'),
                      e.currentTarget,
                    );
                  }}
                >
                  (微信)
                </Box>
                <Box
                  style={{ cursor: 'pointer' }}
                  component="span"
                  className="contact-txt"
                  sx={{
                    '&:hover': {
                      opacity: '.6',
                    },
                  }}
                >
                  (推特)
                </Box>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div className="footer-time">Copyright © {year} </div>
          <div className="line"></div>
          <div style={{ padding: '0 8px', fontSize: '12px' }}>
            <div style={{ textAlign: 'left' }}>
              <span>{format({ id: 'footer.desc.star.text' })}</span>
              <span>
                <a
                  href="https://github.com/easy-form/react-form-simple"
                  target="_blank"
                >
                  @github
                </a>
              </span>
            </div>
            <div style={{ marginTop: '10px', textAlign: 'left' }}>
              <span>
                {format({ id: 'footer.desc.issue.text' })}
                <a
                  href="https://github.com/easy-form/react-form-simple/issues"
                  target="_blank"
                >
                  @issue
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <ModalDialog ref={modalRef} />
    </>
  );
};

export default Footer;
