import React from 'react';
import type { FormItemProps } from 'react-form-simple';
import { FormItem } from 'react-form-simple';

export default function App(props: FormItemProps) {
  return <FormItem getContent={({ attrs }) => <input {...attrs} />} />;
}
