import Button from '@components/Button';
import { history, useLocale } from 'dumi';
import React from 'react';
import { useLocalFormat } from 'useLocalFormat';
import './index.less';

export const GetStarted = () => {
  const { base } = useLocale() as any;
  const { format, isDefaultLocal } = useLocalFormat();
  return (
    <Button
      className="start-button"
      onClick={() => {
        const _base = isDefaultLocal() ? '' : base;
        history.push(`${_base}/intro/introduce`);
      }}
    >
      {format({ id: 'hero.action.button.start' })}
    </Button>
  );
};

export const Github = () => {
  return (
    <Button plain className="github-button">
      <a href="https://github.com/easy-form/react-form-simple" target="blank">
        Github
      </a>
    </Button>
  );
};
