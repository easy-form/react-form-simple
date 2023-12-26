import type { MenuItemProps, SelectProps } from '@mui/material';
import { MenuItem, Select as MuiSelect } from '@mui/material';
import React, { useMemo } from 'react';
import { isMeaningful } from 'react-form-simple/utils/util';
import './index.less';

export function Select({
  options,
  getKey,
  valueMap = 'value',
  labelMap = 'label',
  getOptions,
  getOptionsLabel,
  menuItemProps,
  ...rests
}: {
  options: any[];
  getKey?: (item: any) => any;
  valueMap?: string;
  labelMap?: string;
  getOptionsLabel?: (item: any) => React.ReactNode;
  getOptions?: (item: any) => React.ReactNode;
  menuItemProps?: MenuItemProps;
} & SelectProps) {
  const claassName = useMemo(
    () => ['custom-mui-select', rests?.className].filter(Boolean).join(' '),
    [rests?.className],
  );
  const renderSelect = (
    <MuiSelect {...rests} displayEmpty className={claassName}>
      {options.map((item) => {
        const renderOptions = isMeaningful(getOptions) ? (
          getOptions?.(item)
        ) : (
          <MenuItem
            key={getKey?.(item) || item?.[valueMap]}
            value={item?.[valueMap]}
            {...menuItemProps}
          >
            {getOptionsLabel !== undefined
              ? getOptionsLabel(item)
              : item?.[labelMap]}
          </MenuItem>
        );
        return renderOptions;
      })}
    </MuiSelect>
  );
  return renderSelect;
}
