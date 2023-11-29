import React from 'react';
import { Box } from 'react-form-simple/template/Box';
import { useLocalFormat } from 'useLocalFormat';

export const Desc = () => {
  const { format, isLocalZH_CN } = useLocalFormat();
  return (
    <Box>
      <div
        style={{
          fontSize: '33px',
          letterSpacing: '3px',
          ...(isLocalZH_CN()
            ? {
                lineHeight: 1.8,
              }
            : {
                letterSpacing: '0px',
              }),
        }}
      >
        {format({ id: 'hero.main.title' })}
      </div>
      <div
        style={{
          marginTop: '30px',
          fontSize: '18px',
          letterSpacing: '2px',
          ...(isLocalZH_CN()
            ? {
                lineHeight: 1.8,
              }
            : {
                letterSpacing: '0px',
                lineHeight: 1.9,
              }),
        }}
      >
        {format({ id: 'hero.main.desc' })}
      </div>
    </Box>
  );
};
