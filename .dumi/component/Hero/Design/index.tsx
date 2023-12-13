import React from 'react';
import Title from '../Title';
import './index.less';

export function Design() {
  return (
    <div style={{ textAlign: 'center' }} className="hero-Design">
      <Title style={{ marginBottom: '80px' }}>架构设计</Title>
      <img src={require('./imgs/useSubscribe.jpg')} alt="" />
    </div>
  );
}

export default Design;
