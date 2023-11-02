import {
  NavLink,
  useLocation,
  useRouteMeta,
  useSidebarData,
  useSiteData,
} from 'dumi';
import Toc from 'dumi/theme/slots/Toc';
import React, { type FC } from 'react';
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
    </div>
  );
};

export default Sidebar;
