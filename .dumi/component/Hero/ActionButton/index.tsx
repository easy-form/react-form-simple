import Button from '@components/Button';
import { history } from 'dumi';
import React from 'react';
import './index.less';

export const GetStarted = () => (
  <Button
    className="start-button"
    onClick={() => {
      history.push('/intro/introduce');
    }}
  >
    开始
  </Button>
);

export const Github = () => {
  return (
    <Button
      className="github-button"
      onClick={() => {
        history.push('/intro/introduce');
      }}
    >
      Github
    </Button>
  );
};
