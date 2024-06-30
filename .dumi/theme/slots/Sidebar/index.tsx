import { NavLink, useLocation, useRouteMeta, useSidebarData } from 'dumi';
import Toc from 'dumi/theme/slots/Toc';
import React, { type FC } from 'react';
import './index.less';

const Sidebar: FC = () => {
  const { pathname } = useLocation();
  const meta = useRouteMeta();
  const sidebar = useSidebarData();

  if (!sidebar) return null;

  return (
    <div className="dumi-default-sidebar">
      <div
        style={{
          position: 'absolute',
          top: '5%',
        }}
      >
        <div>
          <img
            src="https://github.com/easy-form/react-form-simple/actions/workflows/test.yml/badge.svg?branch=main"
            alt="CI passing"
            style={{ width: '100%' }}
          />
        </div>
        <img
          src="https://img.shields.io/badge/typescript-8A2BE2"
          alt="typescript"
          style={{ width: '70px' }}
        />
      </div>
      {sidebar.map((item, i) => (
        <dl className="dumi-default-sidebar-group" key={String(i)}>
          {item.title && (
            <dt style={{ fontSize: '16px', textTransform: 'capitalize' }}>
              {item.title}
            </dt>
          )}
          {item.children.map((child) => (
            <dd key={child.link}>
              <NavLink to={child.link} title={child.title} end>
                <span style={{ fontSize: '15px', textTransform: 'capitalize' }}>
                  {child.title}
                </span>
              </NavLink>
              {child.link === pathname && meta.frontmatter.toc === 'menu' && (
                <Toc />
              )}
            </dd>
          ))}
        </dl>
      ))}
    </div>
  );
};

export default Sidebar;
