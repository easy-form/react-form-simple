import { ReactComponent as IconClose } from '@ant-design/icons-svg/inline-svg/outlined/close.svg';
import { ReactComponent as IconMenu } from '@ant-design/icons-svg/inline-svg/outlined/menu.svg';
import { HeaderExtra as HeaderExtraCustom } from '@components/HeaderExtra';
import { useRouteMeta, useSiteData } from 'dumi';
import ColorSwitch from 'dumi/theme/slots/ColorSwitch';
import HeaderExtra from 'dumi/theme/slots/HeaderExtra';
import LangSwitch from 'dumi/theme/slots/LangSwitch';
import Logo from 'dumi/theme/slots/Logo';
import RtlSwitch from 'dumi/theme/slots/RtlSwitch';
import SearchBar from 'dumi/theme/slots/SearchBar';
import SocialIcon from 'dumi/theme/slots/SocialIcon';
import React, { useMemo, useState, type FC } from 'react';
import { useRouteHome } from '../../../use/useRouteHome';
import './index.less';

const Header: FC = () => {
  const { frontmatter } = useRouteMeta();
  const [showMenu, setShowMenu] = useState(false);
  const { themeConfig } = useSiteData();

  const { isHome } = useRouteHome();
  const isShowbar = !isHome;

  const socialIcons = useMemo(
    () =>
      themeConfig.socialLinks
        ? Object.keys(themeConfig.socialLinks)
            .slice(0, 5)
            .map((key) => ({
              icon: key,
              link: (themeConfig as any)?.socialLinks?.[key],
            }))
        : [],
    [themeConfig.socialLinks],
  );

  return (
    <div
      className="dumi-default-header"
      data-static={Boolean(frontmatter.hero) || undefined}
      data-mobile-active={showMenu || undefined}
      onClick={() => setShowMenu(false)}
    >
      <div className="dumi-default-header-content">
        <section className="dumi-default-header-left">
          <div style={{ display: 'flex' }}>
            <Logo />
            {/* {isShowbar && <Navbar />} */}
          </div>
        </section>
        <section className="dumi-default-header-right">
          {isShowbar && <SearchBar />}
          <HeaderExtraCustom />
          <LangSwitch />
          <RtlSwitch />
          <div style={{ display: 'inline-flex' }}>
            {themeConfig.prefersColor.switch && (
              <div style={{ marginRight: '20px' }}>
                <ColorSwitch />
              </div>
            )}
            {socialIcons.map((item) => (
              <SocialIcon icon={item.icon} link={item.link} key={item.link} />
            ))}
          </div>
          <HeaderExtra />
        </section>
        <button
          type="button"
          className="dumi-default-header-menu-btn"
          onClick={(ev) => {
            ev.stopPropagation();
            setShowMenu((v) => !v);
          }}
        >
          {showMenu ? <IconClose /> : <IconMenu />}
        </button>
      </div>
    </div>
  );
};

export default Header;
