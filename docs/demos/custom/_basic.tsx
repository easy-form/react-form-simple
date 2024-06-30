import React, { useRef } from 'react';
import {
  FormItem,
  FormItemApis,
  type ContextProps,
  type GlobalProps,
  type UseFormNamespace,
} from 'react-form-simple';

type FormItemRefType = React.RefObject<FormItemApis>;

export const useForm = (
  model: Record<string, any>,
  config?: UseFormNamespace.ShareConfig,
) => {
  const _model = useRef(model);
  const formItemRefs = useRef<Record<string, FormItemRefType>>({});

  const contextProps = useRef<ContextProps>({
    updated({ bindId, value }) {
      _model.current[bindId] = value;
    },
    reset({ bindId }) {
      _model.current[bindId] = '';
    },
    destroy({ bindId }) {
      _model.current[bindId] = '';
    },
  }).current;

  const render = (
    bindId: string,
    renderConfig?: UseFormNamespace.RenderConfigType,
  ) => {
    if (!formItemRefs.current[bindId]) {
      formItemRefs.current[bindId] = React.createRef<FormItemApis>();
    }
    const ref = formItemRefs.current[bindId];

    return (
      fn: (options: GlobalProps.GetContentOptions) => React.ReactNode,
    ) => (
      <FormItem
        contextProps={contextProps}
        {...config}
        {...renderConfig}
        ref={ref}
        bindId={bindId}
        getContent={(options) => fn(options)}
      />
    );
  };

  const action = useRef({
    setValue(bindId: string, value: any) {
      _model.current[bindId] = value;
      const formItemRef = formItemRefs.current[bindId];
      if (formItemRef) {
        formItemRef.current?.setValue(value);
      }
    },
    getValues() {
      return _model.current;
    },
  }).current;

  return { render, ...action };
};

export default function App() {
  const { render, setValue, getValues } = useForm({ name: 'name' });
  const renderName = render('name', {
    label: 'name',
  })(({ attrs }) => <input {...attrs} />);
  return (
    <>
      {renderName}
      <button
        onClick={() => {
          setValue('name', 'jack');
        }}
      >
        setValue
      </button>

      <button
        onClick={() => {
          alert(JSON.stringify(getValues()));
        }}
      >
        submit
      </button>
    </>
  );
}
