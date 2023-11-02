import React from 'react';
import { Box } from 'react-form-simple/template/Box';

export const Desc = () => {
  return (
    <Box
      sx={{
        fontSize: '22px',
        letterSpacing: '3px',
      }}
    >
      <div style={{ fontSize: '32px' }}>
        {/* <span style={{ fontWeight: 'bold' }}>React-form-simple</span> */}
        一个基于react的可受控可扩展的轻量级表单库。
      </div>
      <div style={{ marginTop: '30px', fontSize: '18px', lineHeight: '1.8' }}>
        采用声明式渲染,
        以最快的速度以及最精简的代码渲染出一个可受控的表单。React-form-simple除了集成自身功能之外,还具有非常可扩展的接口,
        并可与第三方ui集成使用。
      </div>
    </Box>
  );
};
