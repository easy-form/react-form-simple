import {
  fireEvent,
  render as testRender,
  waitFor,
} from '@testing-library/react';
import React, { useEffect, useImperativeHandle } from 'react';
import { getUuid } from 'react-form-simple/utils/util';
import { describe, expect, test, vi } from 'vitest';
import useForm from '../use/useForm';

describe('useRender', () => {
  test('render', () => {
    const TestDemo = () => {
      const { render } = useForm({ name: '' });
      return render('name', { label: 'name' })(<input />);
    };
    const { container } = testRender(<TestDemo />);
    const element = container.querySelector('.label-wrap');
    expect(element?.textContent).toBe('name');
  });
  test('render key', () => {
    const TestDemo = () => {
      const { render } = useForm({ name: '' });
      return render('name', { key: 'name' })(<input />);
    };
    const { container } = testRender(<TestDemo />);
    const component = container.querySelector('input');
    expect(component?.getAttribute('data-form-simple-test-id')).toBe('name');
  });
  test('render set value', () => {
    const TestDemo = () => {
      const { render, model } = useForm({ name: '' });

      const rendetName = render('name')(<input />);
      useEffect(() => {
        model.name = 'test';
      }, []);
      return rendetName;
    };
    const { container } = testRender(<TestDemo />);
    const compnent = container.querySelector('input');
    expect(compnent?.value).toBe('test');
  });
  test('render defineProps', () => {
    const TestDemo = () => {
      const { render, model } = useForm({ name: 'test' });

      const renderName = render('name', {
        defineProps() {
          return model.name === 'test'
            ? { readOnly: true }
            : { readOnly: false };
        },
      })(<input />);

      return renderName;
    };
    const { container } = testRender(<TestDemo />);
    const component = container.querySelector('input');
    expect(component?.readOnly).toEqual(true);
  });
});

describe('useForm', () => {
  test('change value', async () => {
    const TestDemo = () => {
      const { render } = useForm({ name: '' });
      return render('name')(<input />);
    };
    const { container } = testRender(<TestDemo />);
    const inputContainer = container.querySelector('input');
    if (inputContainer) {
      await vi.waitFor(
        () => {
          fireEvent.change(inputContainer, { target: { value: 'test value' } });
          return true;
        },
        {
          timeout: 500,
        },
      );

      expect(inputContainer.value).toBe('test value');
    }
  });
  test('reset value', async () => {
    const ref = React.createRef<any>();
    const TestDemo = React.forwardRef((props, ref) => {
      useImperativeHandle(ref, () => ({
        reset() {
          reset();
        },
        getModalValue: () => {
          return model.name;
        },
      }));
      const { render, reset, model } = useForm({ name: '' });

      useEffect(() => {
        model.name = 'test';
      }, []);
      return render('name', { defaultValue: '' })(
        <input id="demo-reset-test" />,
      );
    });
    const { container, unmount } = testRender(<TestDemo ref={ref} />);
    await waitFor(() => ref.current?.reset());
    const inputContainer = container.querySelector(
      '#demo-reset-test',
    ) as HTMLInputElement;
    expect(inputContainer.value).toBe('');
    expect(ref.current.getModalValue()).toBe('');
    unmount();
  });
  test('model equal', () => {
    const TestDemo = () => {
      const { model } = useForm({});

      useEffect(() => {
        expect(model).toEqual({});
      }, []);
      return <></>;
    };
    testRender(<TestDemo />);
  });
});

describe.concurrent('watch or subscribe', () => {
  test('watch', async ({ expect }) => {
    const watchMockFn = vi.fn().mockImplementation(() => ({}));
    const TestDemo = () => {
      const { useWatch, model } = useForm({ name: 'test value' });

      useWatch(({ model }) => model?.name, watchMockFn);

      useEffect(() => {
        setTimeout(() => {
          model.name = 'test';
        }, 500);
      }, []);
      return <></>;
    };
    testRender(<TestDemo />);

    await vi.waitFor(
      () => {
        expect(watchMockFn).toHaveBeenCalledTimes(1);
        return true;
      },
      {
        timeout: 600,
      },
    );
  });
  test('subscribe', async ({ expect }) => {
    const TestDemo = () => {
      const { useSubscribe, model } = useForm({ name: 'test value' });

      const subscribeName = useSubscribe(({ model }) => model?.name);

      useEffect(() => {
        setTimeout(() => {
          model.name = 'test subscribe';
        }, 500);
      }, []);
      return <div id="subscribe-name">{subscribeName}</div>;
    };
    const { getByText } = testRender(<TestDemo />);

    await vi.waitFor(
      () => {
        const component = getByText('test subscribe');
        expect(component.textContent).toBe('test subscribe');
        return true;
      },
      {
        timeout: 600,
      },
    );
  });
});

describe.concurrent('dymic form', () => {
  test('add', async ({ expect }) => {
    const TestDemo = React.forwardRef((props, ref) => {
      const { render, model, forceUpdate } = useForm<{
        list: Array<{ uid: string; value: string }>;
      }>({ list: [] });
      const renderMapList = model.list.map((v, index) => {
        return (
          <div id={v.uid}>
            {render(`list.${index}.value`)(
              <input id={`dymic-${index}-input`} />,
            )}
          </div>
        );
      });
      const renderButton = (
        <button
          id="dymic-add-button"
          onClick={() => {
            model.list.push({
              uid: getUuid(),
              value: `${model.list.length}`,
            });
            forceUpdate();
          }}
        >
          add
        </button>
      );
      useImperativeHandle(ref, () => ({}));
      return (
        <>
          <div id="add-dymic-wrap">{renderMapList}</div>
          {renderButton}
        </>
      );
    });
    const { container } = testRender(<TestDemo />);
    const button = container.querySelector(
      '#dymic-add-button',
    ) as HTMLButtonElement;
    button.click();
    await vi.waitFor(
      () => {
        const wrap = container.querySelector(
          '#add-dymic-wrap',
        ) as HTMLDivElement;
        if (wrap.children.length > 0) {
          return true;
        }
        return Promise.reject();
      },
      { timeout: 100, interval: 10 },
    );
    const wrap = container.querySelector('#add-dymic-wrap') as HTMLDivElement;
    expect(wrap.children.length).toBeGreaterThan(0);
    const children = wrap.children;
    Array.from(children).forEach((v, index) => {
      const input = container.querySelector(
        `#dymic-${index}-input`,
      ) as HTMLInputElement;
      expect(Number(input.value)).toBe(index);
    });
  });

  test('remove', async ({ expect }) => {
    const TestDemo = React.forwardRef((props, ref) => {
      const { render, model, forceUpdate } = useForm<{
        list: Array<{ uid: string; value: string }>;
      }>({ list: [] });
      const renderMapList = model.list.map((v, index) => {
        const renderRemoveButton = (
          <button
            id={`remove-item-${index}-button`}
            onClick={() => {
              model.list.splice(index, 1);
              forceUpdate();
            }}
          >
            remove!
          </button>
        );
        return (
          <div id={v.uid}>
            {render(`list.${index}.value`)(
              <input id={`dymic-remove-${index}-input`} />,
            )}
            {renderRemoveButton}
          </div>
        );
      });
      const renderButton = (
        <button
          id="dymic-remove-add-button"
          onClick={() => {
            model.list.push({
              uid: getUuid(),
              value: `${model.list.length}`,
            });
            forceUpdate();
          }}
        >
          add
        </button>
      );
      useImperativeHandle(ref, () => ({
        getModalData() {
          return model;
        },
        set(arr: any[]) {
          model.list = arr;
          forceUpdate();
        },
      }));
      return (
        <>
          <div id="remove-dymic-wrap">{renderMapList}</div>
          {renderButton}
        </>
      );
    });

    const demoRef = React.createRef() as any;

    const { container, unmount } = testRender(<TestDemo ref={demoRef} />);
    const addItem = (count: number = 1) => {
      const button = container.querySelector(
        '#dymic-remove-add-button',
      ) as HTMLButtonElement;
      Array.from({ length: count }, (x, y) => y).forEach((v) => {
        button.click();
      });
    };

    addItem(2);

    const getWrap = () =>
      container.querySelector('#remove-dymic-wrap') as HTMLDivElement;

    const getLen = () => {
      const wrap = getWrap();
      return wrap?.children?.length;
    };

    const checkWrapChildrenLen = () => {
      const len = getLen();
      if (len === 2) {
        return true;
      }
      return Promise.reject();
    };
    await vi.waitFor(() => checkWrapChildrenLen(), {
      timeout: 100,
      interval: 10,
    });

    const len = getLen();
    expect(len).toBeGreaterThan(0);
    const getInput = (index: number) => {
      const input = container.querySelector(
        `#dymic-remove-${index}-input`,
      ) as HTMLInputElement;
      return input;
    };
    const getInputValue = (index: number) => {
      const input = getInput(index);
      return input.value;
    };
    const checkInputValue = () => {
      const wrap = getWrap();
      const children = wrap.children;
      Array.from(children).forEach((v, index) => {
        const value = getInputValue(index);
        expect(Number(value)).toBe(index);
      });
    };
    checkInputValue();
    const removeAction = async () => {
      const removeButton = container.querySelector(
        '#remove-item-0-button',
      ) as HTMLButtonElement;

      removeButton.click();
      await vi.waitFor(() => {
        const len = getLen();
        if (len === 1) {
          return true;
        }
        return Promise.reject();
      });
      // checkInputValue();

      addItem();

      const changeInputValue = (index: number) => {
        const input = getInput(index);
        fireEvent.change(input, { target: { value: 'testtest' } });
      };

      await vi.waitFor(() => {
        const len = getLen();
        if (len === 2) return true;
        return Promise.reject();
      });

      changeInputValue(0);

      expect(getInputValue(0)).toBe('testtest');

      expect(getInputValue(0)).not.toBe(getInputValue(1));
      const getModal = () => {
        const model = demoRef.current?.getModalData?.();
        return model;
      };
      const getModelListValue = (index: number) => {
        const model = getModal();
        const list = model.list || [];
        return list[index].value;
      };

      expect(getModelListValue(0)).toBe(getInputValue(0));
      expect(getModelListValue(0)).not.toBe(getModelListValue(1));

      return Promise.resolve();
    };

    await removeAction();
  });

  test('assignment', async () => {
    const TestDemo = React.forwardRef((props, ref) => {
      const { render, model, forceUpdate } = useForm<{
        list: Array<{ uid: string; value: string }>;
      }>({ list: [] });
      const renderMapList = model.list.map((v, index) => {
        return (
          <div id={v.uid}>
            {render(`list.${index}.value`)(
              <input id={`dymic-assignment-${index}-input`} />,
            )}
          </div>
        );
      });

      useImperativeHandle(ref, () => ({
        getModalData() {
          return model;
        },
        set(arr: any[]) {
          model.list = arr;
          forceUpdate();
        },
      }));
      return (
        <>
          <div id="assign-dymic-wrap">{renderMapList}</div>
        </>
      );
    });

    const ref = React.createRef() as any;
    const { container } = testRender(<TestDemo ref={ref} />);

    const arr = [
      { uid: getUuid(), value: 'name' },
      { uid: getUuid(), value: 'age' },
    ];
    ref.current.set(arr);

    const getWrap = () =>
      container.querySelector('#assign-dymic-wrap') as HTMLDivElement;

    const getLen = () => {
      const wrap = getWrap();
      return wrap?.children?.length;
    };

    const checkWrapChildrenLen = () => {
      const len = getLen();
      if (len === 2) {
        return true;
      }
      return Promise.reject();
    };

    const getInput = (index: number) => {
      const input = container.querySelector(
        `#dymic-assignment-${index}-input`,
      ) as HTMLInputElement;
      return input;
    };
    const getInputValue = (index: number) => {
      const input = getInput(index);
      return input.value;
    };

    const getModal = () => {
      const model = ref.current?.getModalData?.();
      return model;
    };

    const getModelListValue = (index: number) => {
      const model = getModal();
      const list = model.list || [];
      return list[index].value;
    };

    await vi.waitFor(() => checkWrapChildrenLen());

    Array.from(getWrap().children).forEach((v, index) => {
      const inputValue = getInputValue(index);
      expect(inputValue).toBe(arr[index].value);
      expect(inputValue).toBe(getModelListValue(index));
    });

    fireEvent.change(getInput(0), { target: { value: 'testtest' } });

    fireEvent.change(getInput(1), { target: { value: 'testtesttwo' } });

    expect(getModelListValue(0)).toBe(getInputValue(0));

    expect(getModelListValue(1)).toBe(getInputValue(1));

    expect(getModelListValue(0)).not.toBe(getInputValue(1));
  });
});
