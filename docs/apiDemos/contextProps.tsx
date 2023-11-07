import React from 'react';
import type { FormItemProps } from 'react-form-simple';
import { FormItem } from 'react-form-simple';

export default function ContextProps(props: FormItemProps['contextProps']) {
  return (
    <FormItem
      getContent={() => <input />}
      contextProps={
        {
          /** ... */
        }
      }
    />
  );
}
