import { MenuItem, Select } from '@mui/material';
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
      className="header-extra"
      size="small"
      defaultValue={1}
      variant="standard"
    >
      {options.map((item) => (
        <MenuItem key={item.value} value={item.value}>
          <a href={item.href} target="_blank" className="a">
            {item.label}
          </a>
        </MenuItem>
      ))}
    </Select>
  );
}

export default HeaderExtra;
