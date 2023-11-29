import { useSiteData } from 'dumi';
import React, { type FC } from 'react';
import { useLocalFormat } from 'useLocalFormat';
import './index.less';

const Footer: FC = () => {
  const { themeConfig } = useSiteData();

  if (!themeConfig.footer) return null;

  const { format } = useLocalFormat();

  return (
    <div className="dumi-default-footer">
      <div>
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
      <div>
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
  );
};

export default Footer;
