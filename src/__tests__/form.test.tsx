import {
  fireEvent,
  render as testRender,
  waitFor,
} from '@testing-library/react';
import React, { useEffect, useImperativeHandle, useRef, useState } from 'react';
import {
  useForm,
  type FormApis,
  type FormItemApis,
  type FormItemProps,
} from 'react-form-simple';
import { describe, expect, test, vi } from 'vitest';
import Form from '../template/Form';
import FormItem from '../template/FormItem';

describe('form', () => {
  test('form api', async () => {
    let fnKeys: (keyof FormApis)[] = [];
    let fns = {} as FormApis;
    const TestDemo = () => {
      const formRef = useRef<FormApis>(null);
      useEffect(() => {
        if (formRef.current) {
          fnKeys = Object.keys(formRef.current) as (keyof FormApis)[];
          fns = formRef.current;
        }
      }, [formRef]);
      return <Form ref={formRef} />;
    };
    const { unmount } = testRender(<TestDemo />);
    await vi.waitFor(
      () => {
        fnKeys.forEach((key) => {
          const mockFn = vi.spyOn(fns, key).mockImplementation(() => void {});
          (fns[key] as any)();
          expect(mockFn).toHaveBeenCalled();
        });
      },
      {
        timeout: 100,
      },
    );
    unmount();
  });
});

describe.concurrent('form item', () => {
  test('contextProps', async ({ expect }) => {
    let apiEffectOptionss = null;
    const contextProps: FormItemProps['contextProps'] = {
      destroy() {},
      apiEffect(args) {
        apiEffectOptionss = args;
      },
      mounted() {},
    };

    const mockDestroyFn = vi.spyOn(contextProps, 'destroy');

    const mockApiEffectFn = vi.spyOn(contextProps, 'apiEffect');

    const mockMounter = vi.spyOn(contextProps, 'mounted');

    const TestDemo = () => {
      const [isShow, setIsShow] = useState(true);

      const renderButton = (
        <button
          id="button"
          type="button"
          onClick={() => {
            setIsShow(false);
          }}
        >
          click!
        </button>
      );
      return (
        <>
          {renderButton}
          {isShow && <FormItem contextProps={contextProps} />}
        </>
      );
    };

    const { findByText, unmount } = testRender(<TestDemo />);

    expect(mockApiEffectFn).toHaveBeenCalled();

    expect(apiEffectOptionss).not.toBeNull();

    expect(apiEffectOptionss).toBeTypeOf('object');

    expect(mockMounter).toHaveBeenCalled();

    const button = await findByText('click!');

    fireEvent.click(button);

    expect(mockDestroyFn).toHaveBeenCalled();

    unmount();
  });
  test('form item api', async ({ expect }) => {
    let fnKeys: (keyof FormItemApis)[] = [];
    let fns = {} as FormItemApis;
    const TestDemo = () => {
      const formItemRef = useRef<FormItemApis>(null);
      useEffect(() => {
        if (formItemRef.current) {
          fnKeys = Object.keys(formItemRef.current) as (keyof FormItemApis)[];
          fns = formItemRef.current;
        }
      }, [formItemRef]);
      return <FormItem ref={formItemRef} />;
    };
    const { unmount } = testRender(<TestDemo />);
    await vi.waitFor(
      () => {
        fnKeys.forEach((key) => {
          const mockFn = vi.spyOn(fns, key).mockImplementation(() => void {});
          (fns[key] as any)();
          expect(mockFn).toHaveBeenCalled();
        });
      },
      {
        timeout: 100,
      },
    );
    unmount();
  });
  test('form item change', async ({ expect }) => {
    let _value: any = null;
    const contextProps: FormItemProps['contextProps'] = {
      updated({ value }) {
        _value = value;
      },
    };
    const TestDemo = () => {
      return (
        <FormItem
          getContent={({ attrs }) => <input {...attrs} />}
          contextProps={contextProps}
        />
      );
    };
    const { container, unmount } = testRender(<TestDemo />);

    const inputComponent = container.querySelector('input');
    if (inputComponent) {
      fireEvent.change(inputComponent, { target: { value: 'test value' } });
      setTimeout(() => {
        expect('test value').toBe(_value);
        unmount();
      });
    }
  });
  test('form item blur', ({ expect }) => {
    const onError = vi.fn();
    const TestDemo = () => {
      return (
        <FormItem
          getContent={({ attrs }) => <input {...attrs} />}
          trigger="blur"
          rules={{ required: 'Please Input' }}
          bindId="name blur"
          onError={onError}
        />
      );
    };
    const { container, unmount } = testRender(<TestDemo />);
    const inputComponent = container.querySelector('input');
    if (inputComponent) {
      fireEvent.blur(inputComponent);
      setTimeout(() => {
        expect(onError).toHaveBeenCalled();
        unmount();
      });
    }
  });
  test('form item width', ({ expect }) => {
    const { container, unmount } = testRender(
      <FormItem fullWidth bindId={111111} />,
    );
    const component = container.querySelector('.react-form-simple-form-item');
    if (component) {
      const computedStyle = window.getComputedStyle(component);
      expect(computedStyle.width).toBe('100%');
    }
    unmount();
  });
  test('form item label position', ({ expect }) => {
    const { container } = testRender(<FormItem labelPosition="top" />);
    const component = container.querySelector('.react-form-simple-form-item');
    expect(component?.className.split(' ')).toContain(
      'react-form-simple-form-item-top',
    );
  });
  test('form item requireIndicator', ({ expect }) => {
    const { queryByText, unmount } = testRender(
      <FormItem requireIndicator label="name" />,
    );
    const co = queryByText('*');
    expect(co).not.toBeNull();
    unmount();
  });
  test('form item requireIndicator null', async ({ expect }) => {
    const { queryByText, unmount } = testRender(<FormItem label="name" />);
    const co = queryByText('*');
    expect(co).toBeNull();
    unmount();
  });
  test('form item readOnly', ({ expect }) => {
    const { queryByText, unmount } = testRender(
      <FormItem
        readOnly
        getContent={({ attrs }) => <input {...attrs} />}
        readOnlyText="test readOnly text"
      />,
    );
    expect(queryByText('test readOnly text')).not.toBeNull();
    unmount();
  });
  test('form item vaild test', () => {
    const onError = vi.fn();
    const TestDemo = () => {
      const formItemRef = useRef<any>(null);
      useEffect(() => {
        expect(formItemRef.current.validate()).resolves.not.toBeDefined();
      }, []);
      return (
        <FormItem
          ref={formItemRef}
          bindId={'default value'}
          defaultValue="default value"
          rules={{ required: 'Please Input' }}
          onError={onError}
          getContent={({ attrs }) => <input {...attrs} />}
        />
      );
    };
    const { unmount } = testRender(<TestDemo />);

    setTimeout(() => {
      expect(onError).toHaveBeenCalled();
      unmount();
    });
  });
});

describe.concurrent('use Form Item api', () => {
  test('clear vaild', async ({ expect }) => {
    const TestDemo = () => {
      const { render, clearValidate } = useForm({ clearName: 'default value' });
      useEffect(() => {
        setTimeout(() => {
          clearValidate();
        });
      }, []);
      return render('clearName', { rules: { required: 'PleaseInput' } })(
        <input />,
      );
    };
    const { container, unmount } = testRender(<TestDemo />);
    const input = container.querySelector('input') as HTMLInputElement;

    fireEvent.change(input, { target: { value: '' } });
    const getErrorText = () => {
      const componet = container.querySelector(
        '[data-error-id="clearName-PleaseInput"]',
      ) as HTMLElement;
      if (componet) {
        return componet.getAttribute('data-error-text');
      }
      return null;
    };
    expect(getErrorText()).not.toBeNull();

    await vi.waitFor(
      () => {
        const text = getErrorText();
        if (text) {
          return Promise.reject();
        }
      },
      {
        timeout: 5000,
        interval: 100,
      },
    );
    const text = getErrorText();
    expect(text).toBeNull();
    unmount();
  });
  test('reset', async ({ expect }) => {
    const TestDemo = () => {
      const { render, reset, model } = useForm({ restVaild: '' });

      useEffect(() => {
        model.restVaild = 'test value';
        reset();
      }, []);

      return <>{render('restVaild')(<input id="reset-value-test" />)}</>;
    };
    const { container, unmount } = testRender(<TestDemo />);

    const getInputValue = () =>
      (container.querySelector('#reset-value-test') as HTMLInputElement).value;

    await vi.waitFor(
      () => {
        const inputValue = getInputValue();
        if (!inputValue) {
          return Promise.resolve();
        }
      },
      {
        timeout: 1000,
        interval: 100,
      },
    );
    expect(getInputValue()).toBe('');
    unmount();
  });
  test('remove and reapply vaild', async ({ expect }) => {
    const comppnentRef = React.createRef();
    const TestDemo = React.forwardRef((props, ref) => {
      const { render, removeValidator, reapplyValidator, validate } = useForm({
        removeName: 'test value',
      });

      useImperativeHandle(ref, () => ({
        vaild() {
          console.log(66666);
          return validate();
        },
      }));
      useEffect(() => {
        removeValidator();
      }, []);
      const button = (
        <button
          type="button"
          id="reapply-button"
          onClick={() => {
            reapplyValidator();
          }}
        >
          click
        </button>
      );
      const buttonVaild = (
        <button
          type="button"
          id="valid-button"
          onClick={async () => validate()}
        >
          valid
        </button>
      );
      return (
        <>
          {button}
          {buttonVaild}
          {render('removeName', { rules: { required: 'Please Input' } })(
            <input id="remove-input" />,
          )}
        </>
      );
    });

    const { container, unmount } = testRender(<TestDemo ref={comppnentRef} />);

    const input = container.querySelector('#remove-input') as HTMLInputElement;
    await vi.waitFor(() => Promise.resolve(), { timeout: 1000, interval: 100 });
    fireEvent.change(input, { target: { value: '' } });
    const getErrorComponent = () =>
      container.querySelector('[data-error-id="removeName-Please Input"]');
    const errorComponent = getErrorComponent();
    expect(errorComponent).toBeNull();
    const button = container.querySelector(
      '#reapply-button',
    ) as HTMLButtonElement;
    fireEvent.click(button);

    await expect(() =>
      (comppnentRef.current as any).vaild(),
    ).rejects.toThrowError('Please Input');

    unmount();
  });
  test('setError', async () => {
    const ref = React.createRef<FormItemApis>();
    const { queryByText } = testRender(<FormItem ref={ref} />);
    await waitFor(() => ref.current?.setError('setError error value'));

    expect(queryByText('setError error value')).not.toBeNull();
  });
});
