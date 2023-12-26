import {
  NavLink,
  useLocation,
  useRouteMeta,
  useSidebarData,
  useSiteData,
} from 'dumi';
import Toc from 'dumi/theme/slots/Toc';
import React, { type FC } from 'react';
import { ScrollBar } from '../../../component/ScrollBar';
import './index.less';

const Sidebar: FC = () => {
  const { pathname } = useLocation();
  const meta = useRouteMeta();
  const sidebar: any[] = useSidebarData();

  if (!sidebar) return null;

  const { themeConfig } = useSiteData();
  const { onlyShowToc } = themeConfig;

  return (
    <div className="dumi-default-sidebar">
      {/* <Logo /> */}

      <ScrollBar>
        <div>
          <img
            src="https://github.com/easy-form/react-form-simple/actions/workflows/test.yml/badge.svg"
            alt="CI passing"
            style={{ width: '80px' }}
          />
          <img
            src="https://img.shields.io/badge/typescript-8A2BE2"
            alt="typescript"
            style={{ width: '58px', marginLeft: '6px' }}
          />
        </div>
        {onlyShowToc ? (
          <Toc />
        ) : (
          sidebar.map((item, i) => (
            <dl className="dumi-default-sidebar-group" key={String(i)}>
              {item.title && <dt>{item.title}</dt>}
              {item.children.map((child: any) => (
                <dd key={child.link}>
                  <NavLink to={child.link} title={child.title} end>
                    {child.title}
                  </NavLink>
                  {meta.frontmatter.toc === 'menu' && <Toc path={child.link} />}
                </dd>
              ))}
            </dl>
          ))
        )}
      </ScrollBar>
    </div>
  );
};

export default Sidebar;
