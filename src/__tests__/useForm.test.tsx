import {
  fireEvent,
  render as testRender,
  waitFor,
} from '@testing-library/react';
import React, { useEffect, useImperativeHandle } from 'react';
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
