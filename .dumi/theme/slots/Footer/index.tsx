import { useSiteData } from 'dumi';
import React, { type FC } from 'react';
import './index.less';

const Footer: FC = () => {
  const { themeConfig } = useSiteData();

  if (!themeConfig.footer) return null;

  return (
    <div className="dumi-default-footer">
      <div>
        <span>如果让你的表单开发变得更加容易，请给我们加颗星</span>
        <span>
          <a
            href="https://github.com/easy-form/react-form-simple"
            target="_blank"
          >
            @github
          </a>
        </span>
      </div>
      <div>
        <span>
          如果你在使用过程中遇到了困难，请给我们提
          <a
            href="https://github.com/easy-form/react-form-simple/issues"
            target="_blank"
          >
            @issue
          </a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
