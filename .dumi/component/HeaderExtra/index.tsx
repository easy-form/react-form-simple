import { Select } from '@components/Select';
import React from 'react';
import './index.less';

export function HeaderExtra() {
  const options = [
    {
      label: '发布日志',
      href: 'https://github.com/easy-form/react-form-simple/blob/main/CHANGELOG.md',
      value: 1,
    },
    {
      label: '社区讨论',
      href: 'https://github.com/easy-form/react-form-simple/tree/main?tab=readme-ov-file#-community',
      value: 2,
    },
  ];
  return (
    <Select
      size="small"
      variant="standard"
      options={options}
      sx={{ fontSize: '14px' }}
      menuItemProps={{ value: -1, sx: { fontSize: '14px' } }}
      getOptionsLabel={(item) => (
        <a href={item.href} target="_blank" className="a">
          {item.label}
        </a>
      )}
      renderValue={(selected) => {
        return <span className="about">关于</span>;
      }}
    />
  );
}

export default HeaderExtra;
