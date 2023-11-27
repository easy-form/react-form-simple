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
    <Button plain className="github-button">
      <a href="https://github.com/easy-form/react-form-simple" target="blank">
        Github
      </a>
    </Button>
  );
};
