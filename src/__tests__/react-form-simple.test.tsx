import {
  fireEvent,
  render as testRender,
  waitFor,
} from '@testing-library/react';
import React, { useEffect, useImperativeHandle, useRef, useState } from 'react';
import {
  Form,
  FormItem,
  useForm,
  type FormApis,
  type FormItemApis,
  type FormItemProps,
} from 'react-form-simple';
import { getUuid } from 'react-form-simple/utils/util';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';

describe('React Form Simple - 完整测试套件', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('Form 组件 API 测试', () => {
    test('Form 组件应该暴露所有必需的 API', async () => {
      let fnKeys: (keyof FormApis)[] = [];
      let fns = {} as FormApis;

      const TestDemo = () => {
        const formRef = useRef<FormApis>(null);
        useEffect(() => {
          if (formRef.current) {
            fnKeys = Object.keys(formRef.current) as (keyof FormApis)[];
            fns = formRef.current;
          }
        }, []);
        return <Form ref={formRef} />;
      };

      const { unmount } = testRender(<TestDemo />);

      await vi.waitFor(
        () => {
          expect(fnKeys.length).toBeGreaterThan(0);
          fnKeys.forEach((key) => {
            expect(typeof fns[key]).toBe('function');
            const mockFn = vi.spyOn(fns, key).mockImplementation(() => void 0);
            (fns[key] as any)();
            expect(mockFn).toHaveBeenCalled();
          });
        },
        { timeout: 100 },
      );

      unmount();
    });

    test('Form 组件应该支持 validate 方法', async () => {
      const ref = React.createRef<FormApis>();
      const TestDemo = () => (
        <Form ref={ref}>
          <FormItem
            bindId="testField"
            rules={{ required: '请输入内容' }}
            getContent={({ attrs }) => <input {...attrs} />}
          />
        </Form>
      );

      const { unmount } = testRender(<TestDemo />);

      await vi.waitFor(async () => {
        if (ref.current) {
          try {
            await ref.current.validate('testField');
            expect.fail('应该抛出验证错误');
          } catch (error) {
            expect(error).toBe('请输入内容');
          }
        }
      });

      unmount();
    });

    test('Form 组件应该支持 setValue 和 reset 方法', async () => {
      const TestDemo = () => {
        const { render, setValue, reset } = useForm({ testField: '' });

        return (
          <div>
            {render('testField')(({ attrs }) => (
              <input {...attrs} id="test-input" />
            ))}
            <button
              id="set-btn"
              onClick={() => setValue('testField', 'test value')}
            >
              设置值
            </button>
            <button id="reset-btn" onClick={reset}>
              重置
            </button>
          </div>
        );
      };

      const { container, unmount } = testRender(<TestDemo />);

      const input = container.querySelector('#test-input') as HTMLInputElement;
      const setBtn = container.querySelector('#set-btn') as HTMLButtonElement;
      const resetBtn = container.querySelector(
        '#reset-btn',
      ) as HTMLButtonElement;

      // 点击设置值按钮
      fireEvent.click(setBtn);

      await waitFor(() => {
        expect(input.value).toBe('test value');
      });

      // 点击重置按钮
      fireEvent.click(resetBtn);

      await waitFor(() => {
        expect(input.value).toBe('');
      });

      unmount();
    });
  });

  describe('FormItem 组件测试', () => {
    test('FormItem 应该暴露所有必需的 API', async () => {
      let fnKeys: (keyof FormItemApis)[] = [];
      let fns = {} as FormItemApis;

      const TestDemo = () => {
        const formItemRef = useRef<FormItemApis>(null);
        useEffect(() => {
          if (formItemRef.current) {
            fnKeys = Object.keys(formItemRef.current) as (keyof FormItemApis)[];
            fns = formItemRef.current;
          }
        }, []);
        return <FormItem ref={formItemRef} />;
      };

      const { unmount } = testRender(<TestDemo />);

      await vi.waitFor(
        () => {
          expect(fnKeys.length).toBeGreaterThan(0);
          fnKeys.forEach((key) => {
            const mockFn = vi.spyOn(fns, key).mockImplementation(() => void 0);
            (fns[key] as any)();
            expect(mockFn).toHaveBeenCalled();
          });
        },
        { timeout: 100 },
      );

      unmount();
    });

    test('FormItem 应该支持 contextProps 生命周期', async () => {
      let apiEffectOptions = null;
      const contextProps: FormItemProps['contextProps'] = {
        destroy: vi.fn(),
        apiEffect: vi.fn((args) => {
          apiEffectOptions = args;
        }),
        mounted: vi.fn(),
        updated: vi.fn(),
      };

      const TestDemo = () => {
        const [isShow, setIsShow] = useState(true);
        return (
          <>
            <button id="toggle-btn" onClick={() => setIsShow(false)}>
              销毁组件
            </button>
            {isShow && <FormItem contextProps={contextProps} />}
          </>
        );
      };

      const { findByText, unmount } = testRender(<TestDemo />);

      expect(contextProps.apiEffect).toHaveBeenCalled();
      expect(contextProps.mounted).toHaveBeenCalled();
      expect(apiEffectOptions).not.toBeNull();
      expect(apiEffectOptions).toBeTypeOf('object');

      const button = await findByText('销毁组件');
      fireEvent.click(button);

      expect(contextProps.destroy).toHaveBeenCalled();
      unmount();
    });

    test('FormItem 应该支持值变化监听', async () => {
      let capturedValue: any = null;
      const contextProps: FormItemProps['contextProps'] = {
        updated: vi.fn(({ value }) => {
          capturedValue = value;
        }),
      };

      const TestDemo = () => (
        <FormItem
          getContent={({ attrs }) => <input {...attrs} id="change-input" />}
          contextProps={contextProps}
        />
      );

      const { container, unmount } = testRender(<TestDemo />);
      const input = container.querySelector(
        '#change-input',
      ) as HTMLInputElement;

      fireEvent.change(input, { target: { value: 'test value' } });

      await waitFor(() => {
        expect(capturedValue).toBe('test value');
        expect(contextProps.updated).toHaveBeenCalled();
      });

      unmount();
    });

    test('FormItem 应该支持验证功能', async () => {
      const onError = vi.fn();
      const TestDemo = () => (
        <FormItem
          getContent={({ attrs }) => <input {...attrs} id="validate-input" />}
          trigger="blur"
          rules={{ required: '请输入内容' }}
          bindId="validateField"
          onError={onError}
        />
      );

      const { container, unmount } = testRender(<TestDemo />);
      const input = container.querySelector(
        '#validate-input',
      ) as HTMLInputElement;

      fireEvent.blur(input);

      await waitFor(() => {
        expect(onError).toHaveBeenCalled();
      });

      unmount();
    });

    test('FormItem 应该支持样式配置', () => {
      const { container, unmount } = testRender(
        <FormItem
          fullWidth
          bindId="styleTest"
          labelPosition="top"
          requireIndicator
          label="测试标签"
        />,
      );

      const formItem = container.querySelector('.react-form-simple-form-item');
      expect(formItem).toBeTruthy();

      const computedStyle = window.getComputedStyle(formItem!);
      expect(computedStyle.width).toBe('100%');

      expect(formItem?.className).toContain('react-form-simple-form-item-top');

      const indicator = container.querySelector('*');
      expect(indicator?.textContent).toContain('*');

      unmount();
    });

    test('FormItem 应该支持只读模式', () => {
      const { queryByText, unmount } = testRender(
        <FormItem
          readOnly
          getContent={({ attrs }) => <input {...attrs} />}
          readOnlyText="只读文本内容"
        />,
      );

      expect(queryByText('只读文本内容')).not.toBeNull();
      unmount();
    });
  });

  describe('useForm Hook 测试', () => {
    test('useForm 应该返回正确的 API', () => {
      const TestDemo = () => {
        const formApi = useForm({ name: '' });

        useEffect(() => {
          expect(typeof formApi.render).toBe('function');
          expect(typeof formApi.useSubscribe).toBe('function');
          expect(typeof formApi.useWatch).toBe('function');
          expect(typeof formApi.validate).toBe('function');
          expect(typeof formApi.reset).toBe('function');
          expect(typeof formApi.forceUpdate).toBe('function');
          expect(typeof formApi.setValues).toBe('function');
          expect(formApi.model).toEqual({ name: '' });
        }, []);

        return <div>测试组件</div>;
      };

      testRender(<TestDemo />);
    });

    test('useForm render 方法应该正常工作', () => {
      const TestDemo = () => {
        const { render } = useForm({ name: '' });
        return render('name', { label: '姓名' })(<input id="render-test" />);
      };

      const { container } = testRender(<TestDemo />);
      const labelWrap = container.querySelector('.label-wrap');
      expect(labelWrap?.textContent).toBe('姓名');

      const input = container.querySelector('#render-test');
      expect(input).toBeTruthy();
    });

    test('useForm 应该支持设置和获取值', () => {
      const TestDemo = () => {
        const { render, model } = useForm({ name: '' });

        useEffect(() => {
          model.name = 'test value';
        }, []);

        return render('name')(<input id="value-test" />);
      };

      const { container } = testRender(<TestDemo />);
      const input = container.querySelector('#value-test') as HTMLInputElement;
      expect(input.value).toBe('test value');
    });

    test('useForm 应该支持 defineProps 动态属性', () => {
      const TestDemo = () => {
        const { render, model } = useForm({ name: 'test' });

        return render('name', {
          defineProps: () =>
            model.name === 'test' ? { readOnly: true } : { readOnly: false },
        })(<input id="define-props-test" />);
      };

      const { container } = testRender(<TestDemo />);
      const input = container.querySelector(
        '#define-props-test',
      ) as HTMLInputElement;
      expect(input.readOnly).toBe(true);
    });

    test('useForm 应该支持表单值变化', async () => {
      const TestDemo = () => {
        const { render } = useForm({ name: '' });
        return render('name')(<input id="change-test" />);
      };

      const { container } = testRender(<TestDemo />);
      const input = container.querySelector('#change-test') as HTMLInputElement;

      await vi.waitFor(
        () => {
          fireEvent.change(input, { target: { value: 'new value' } });
          expect(input.value).toBe('new value');
        },
        { timeout: 500 },
      );
    });

    test('useForm 应该支持 reset 功能', async () => {
      const ref = React.createRef<any>();
      const TestDemo = React.forwardRef((props, ref) => {
        const { render, reset, model } = useForm({ name: '' });

        useImperativeHandle(ref, () => ({
          reset,
          getModelValue: () => model.name,
        }));

        useEffect(() => {
          model.name = 'test';
        }, []);

        return render('name', { defaultValue: '' })(<input id="reset-test" />);
      });

      const { container, unmount } = testRender(<TestDemo ref={ref} />);

      await waitFor(() => {
        ref.current?.reset();
        const input = container.querySelector(
          '#reset-test',
        ) as HTMLInputElement;
        expect(input.value).toBe('');
        expect(ref.current.getModelValue()).toBe('');
      });

      unmount();
    });

    test('useForm 应该支持 setValues 批量设置值', () => {
      const TestDemo = () => {
        const { render, setValues } = useForm({
          name: '',
          age: 0,
          email: '',
        });

        useEffect(() => {
          setValues({
            name: '张三',
            age: 25,
            email: 'zhangsan@example.com',
          });
        }, []);

        return (
          <div>
            {render('name')(<input id="name-input" />)}
            {render('age')(<input id="age-input" />)}
            {render('email')(<input id="email-input" />)}
          </div>
        );
      };

      const { container } = testRender(<TestDemo />);

      const nameInput = container.querySelector(
        '#name-input',
      ) as HTMLInputElement;
      const ageInput = container.querySelector(
        '#age-input',
      ) as HTMLInputElement;
      const emailInput = container.querySelector(
        '#email-input',
      ) as HTMLInputElement;

      expect(nameInput.value).toBe('张三');
      expect(ageInput.value).toBe('25');
      expect(emailInput.value).toBe('zhangsan@example.com');
    });
  });

  describe('useWatch Hook 测试', () => {
    test('useWatch 应该监听值变化', async () => {
      const watchCallback = vi.fn();
      const TestDemo = () => {
        const { useWatch, model } = useForm({ name: 'initial' });

        useWatch(({ model }) => model.name, watchCallback);

        useEffect(() => {
          setTimeout(() => {
            model.name = 'changed';
          }, 50);
        }, []);

        return <div>测试组件</div>;
      };

      testRender(<TestDemo />);

      await vi.waitFor(
        () => {
          expect(watchCallback).toHaveBeenCalled();
        },
        { timeout: 200 },
      );
    });

    test('useWatch 应该支持多个值监听', async () => {
      const watchCallback = vi.fn();
      const TestDemo = () => {
        const { useWatch, model } = useForm({
          name: 'initial',
          age: 0,
        });

        useWatch(({ model }) => [model.name, model.age], watchCallback);

        useEffect(() => {
          setTimeout(() => {
            model.name = 'changed';
            model.age = 25;
          }, 100);
        }, []);

        return <div>测试组件</div>;
      };

      testRender(<TestDemo />);

      await vi.waitFor(
        () => {
          expect(watchCallback).toHaveBeenCalled();
        },
        { timeout: 200 },
      );
    });
  });

  describe('useSubscribe Hook 测试', () => {
    test('useSubscribe 应该订阅值变化', async () => {
      const TestDemo = () => {
        const { useSubscribe, model } = useForm({ name: 'initial' });
        const subscribedName = useSubscribe(({ model }) => model.name);

        useEffect(() => {
          setTimeout(() => {
            model.name = 'subscribed value';
          }, 100);
        }, []);

        return <div id="subscribe-result">{subscribedName}</div>;
      };

      const { getByText } = testRender(<TestDemo />);

      await vi.waitFor(
        () => {
          const element = getByText('subscribed value');
          expect(element.textContent).toBe('subscribed value');
        },
        { timeout: 200 },
      );
    });
  });

  describe('动态表单测试', () => {
    test('应该支持动态添加表单项', async () => {
      const TestDemo = () => {
        const { model, render, forceUpdate } = useForm({
          fields: [{ value: 0, uid: getUuid() }],
        });

        const renderFields = model.fields.map((field, i) => (
          <div key={field.uid} id={`field-${i}`}>
            {render(`fields.${i}.value`)(<input id={`input-${i}`} />)}
          </div>
        ));

        return (
          <>
            <div id="fields-container">{renderFields}</div>
            <button
              id="add-field"
              onClick={() => {
                model.fields.push({
                  value: model.fields.length,
                  uid: getUuid(),
                });
                forceUpdate();
              }}
            >
              添加字段
            </button>
          </>
        );
      };

      const { container } = testRender(<TestDemo />);
      const addButton = container.querySelector(
        '#add-field',
      ) as HTMLButtonElement;

      fireEvent.click(addButton);

      await vi.waitFor(
        () => {
          const fieldsContainer = container.querySelector('#fields-container');
          expect(fieldsContainer?.children.length).toBe(2);
        },
        { timeout: 100 },
      );
    });

    test('应该支持动态删除表单项', async () => {
      const TestDemo = () => {
        const { model, render, forceUpdate } = useForm({
          fields: [
            { value: 0, uid: getUuid() },
            { value: 1, uid: getUuid() },
          ],
        });

        const renderFields = model.fields.map((field, i) => (
          <div key={field.uid} id={`field-${i}`}>
            {render(`fields.${i}.value`)(<input id={`input-${i}`} />)}
            <button
              id={`remove-${i}`}
              onClick={() => {
                model.fields.splice(i, 1);
                forceUpdate();
              }}
            >
              删除
            </button>
          </div>
        ));

        return <div id="fields-container">{renderFields}</div>;
      };

      const { container } = testRender(<TestDemo />);
      const removeButton = container.querySelector(
        '#remove-0',
      ) as HTMLButtonElement;

      fireEvent.click(removeButton);

      await vi.waitFor(
        () => {
          const fieldsContainer = container.querySelector('#fields-container');
          expect(fieldsContainer?.children.length).toBe(1);
        },
        { timeout: 100 },
      );
    });

    test('动态表单应该保持数据一致性', async () => {
      const ref = React.createRef<any>();
      const TestDemo = React.forwardRef((props, ref) => {
        const { model, render, forceUpdate } = useForm({
          fields: [{ value: 'test0', uid: getUuid() }],
        });

        useImperativeHandle(ref, () => ({
          getModel: () => model,
          addField: () => {
            model.fields.push({
              value: `test${model.fields.length}`,
              uid: getUuid(),
            });
            forceUpdate();
          },
        }));

        const renderFields = model.fields.map((field, i) => (
          <div key={field.uid}>
            {render(`fields.${i}.value`)(<input id={`input-${i}`} />)}
          </div>
        ));

        return <div>{renderFields}</div>;
      });

      const { container } = testRender(<TestDemo ref={ref} />);

      ref.current?.addField();

      await vi.waitFor(() => {
        const input0 = container.querySelector('#input-0') as HTMLInputElement;
        const input1 = container.querySelector('#input-1') as HTMLInputElement;

        expect(input0.value).toBe('test0');
        expect(input1.value).toBe('test1');

        const model = ref.current?.getModel();
        expect(model.fields[0].value).toBe('test0');
        expect(model.fields[1].value).toBe('test1');
      });
    });
  });

  describe('表单验证测试', () => {
    test('应该支持必填验证', async () => {
      const ref = React.createRef<any>();
      const TestDemo = React.forwardRef((props, ref) => {
        const { render, validate } = useForm({ name: '' });

        useImperativeHandle(ref, () => ({
          validate: () => validate('name'),
        }));

        return render('name', {
          rules: { required: '姓名不能为空' },
        })(<input id="required-test" />);
      });

      testRender(<TestDemo ref={ref} />);

      try {
        await ref.current?.validate();
        expect.fail('应该抛出验证错误');
      } catch (error) {
        expect(error).toBe('姓名不能为空');
      }
    });

    test('应该支持自定义验证器', async () => {
      const ref = React.createRef<any>();
      const TestDemo = React.forwardRef((props, ref) => {
        const { render, validate } = useForm({ email: 'invalid-email' });

        useImperativeHandle(ref, () => ({
          validate: () => validate('email'),
        }));

        return render('email', {
          rules: {
            validator: (value) => {
              const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
              return emailRegex.test(value) ? null : '请输入有效的邮箱地址';
            },
          },
        })(<input id="email-test" />);
      });

      testRender(<TestDemo ref={ref} />);

      try {
        await ref.current?.validate();
        expect.fail('应该抛出验证错误');
      } catch (error) {
        expect(error).toBe('请输入有效的邮箱地址');
      }
    });

    test('应该支持清除验证错误', async () => {
      const TestDemo = () => {
        const { render, clearValidate } = useForm({ name: '' });

        useEffect(() => {
          setTimeout(() => {
            clearValidate('name');
          }, 100);
        }, []);

        return render('name', {
          rules: { required: '请输入姓名' },
        })(<input id="clear-validate-test" />);
      };

      const { container } = testRender(<TestDemo />);
      const input = container.querySelector(
        '#clear-validate-test',
      ) as HTMLInputElement;

      fireEvent.change(input, { target: { value: '' } });

      await vi.waitFor(
        () => {
          const errorElement = container.querySelector(
            '[data-error-id*="请输入姓名"]',
          );
          expect(errorElement).toBeNull();
        },
        { timeout: 200 },
      );
    });

    test('应该支持移除和重新应用验证规则', async () => {
      const ref = React.createRef<any>();
      const TestDemo = React.forwardRef((props, ref) => {
        const { render, removeValidator, reapplyValidator, validate } = useForm(
          {
            name: '',
          },
        );

        useImperativeHandle(ref, () => ({
          removeValidator: () => removeValidator('name'),
          reapplyValidator: () => reapplyValidator('name'),
          validate: () => validate('name'),
        }));

        return render('name', {
          rules: { required: '请输入姓名' },
        })(<input id="validator-test" />);
      });

      testRender(<TestDemo ref={ref} />);

      // 移除验证规则
      ref.current?.removeValidator();

      // 此时验证应该通过（因为验证器已被移除）
      const result = await ref.current?.validate();
      expect(result).toEqual([undefined]); // 实际返回的是数组

      // 重新应用验证规则
      ref.current?.reapplyValidator();

      // 此时验证应该失败
      await expect(ref.current?.validate()).rejects.toBe('请输入姓名');
    });
  });

  describe('表单布局和样式测试', () => {
    test('应该支持不同的标签位置', () => {
      const { container } = testRender(
        <FormItem
          label="测试标签"
          labelPosition="top"
          getContent={({ attrs }) => <input {...attrs} />}
        />,
      );

      const formItem = container.querySelector('.react-form-simple-form-item');
      expect(formItem?.className).toContain('react-form-simple-form-item-top');
    });

    test('应该支持全宽度布局', () => {
      const { container } = testRender(
        <FormItem fullWidth getContent={({ attrs }) => <input {...attrs} />} />,
      );

      const formItem = container.querySelector('.react-form-simple-form-item');
      const computedStyle = window.getComputedStyle(formItem!);
      expect(computedStyle.width).toBe('100%');
    });

    test('应该支持自定义样式', () => {
      const customStyle = { backgroundColor: 'red' };
      const { container } = testRender(
        <FormItem
          formItemStyle={customStyle}
          getContent={({ attrs }) => <input {...attrs} />}
        />,
      );

      const formItem = container.querySelector('.react-form-simple-form-item');
      expect(formItem).toBeTruthy();
    });

    test('应该支持无样式模式', () => {
      const { container } = testRender(
        <FormItem noStyle getContent={({ attrs }) => <input {...attrs} />} />,
      );

      // 在无样式模式下，应该没有默认的表单项包装器
      const formItem = container.querySelector('.react-form-simple-form-item');
      expect(formItem).toBeFalsy(); // 无样式模式下不应该有默认的包装器
    });
  });

  describe('高级功能测试', () => {
    test('应该支持表单项错误设置', async () => {
      const ref = React.createRef<FormItemApis>();
      const TestDemo = () => (
        <FormItem ref={ref} getContent={({ attrs }) => <input {...attrs} />} />
      );

      const { queryByText } = testRender(<TestDemo />);

      await waitFor(() => {
        ref.current?.setError('自定义错误信息');
        expect(queryByText('自定义错误信息')).not.toBeNull();
      });
    });

    test('应该支持格式化值', () => {
      const formatChangeValue = vi.fn((e) => e.target.value.toUpperCase());

      const TestDemo = () => {
        const { render } = useForm({ name: '' });
        return render('name', {
          formatChangeValue,
        })(<input id="format-test" />);
      };

      const { container } = testRender(<TestDemo />);
      const input = container.querySelector('#format-test') as HTMLInputElement;

      fireEvent.change(input, { target: { value: 'test' } });

      expect(formatChangeValue).toHaveBeenCalled();
    });

    test('应该支持初始值设置', async () => {
      const TestDemo = () => (
        <FormItem
          bindId="testField"
          initialValue="初始值"
          getContent={({ attrs }) => <input {...attrs} id="initial-test" />}
        />
      );

      const { container } = testRender(<TestDemo />);

      await waitFor(() => {
        const input = container.querySelector(
          '#initial-test',
        ) as HTMLInputElement;
        expect(input.value).toBe('初始值');
      });
    });

    test('应该支持触发器配置', async () => {
      const onError = vi.fn();
      const TestDemo = () => (
        <FormItem
          bindId="triggerField"
          trigger="blur"
          rules={{ required: '请输入内容' }}
          onError={onError}
          getContent={({ attrs }) => <input {...attrs} id="trigger-test" />}
        />
      );

      const { container } = testRender(<TestDemo />);
      const input = container.querySelector(
        '#trigger-test',
      ) as HTMLInputElement;

      fireEvent.blur(input);

      await waitFor(() => {
        expect(onError).toHaveBeenCalledWith('请输入内容', 'triggerField');
      });
    });
  });

  describe('集成测试', () => {
    test('完整的表单提交流程', async () => {
      const onSubmit = vi.fn();
      const TestDemo = () => {
        const { render, validate, model } = useForm({
          name: '',
          email: '',
          age: 0,
        });

        const handleSubmit = async () => {
          try {
            await validate();
            onSubmit(model);
          } catch (error) {
            console.error('验证失败:', error);
          }
        };

        return (
          <div>
            {render('name', {
              label: '姓名',
              rules: { required: '请输入姓名' },
            })(<input id="submit-name" />)}

            {render('email', {
              label: '邮箱',
              rules: {
                required: '请输入邮箱',
                validator: (value) => {
                  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                  return emailRegex.test(value) ? null : '请输入有效邮箱';
                },
              },
            })(<input id="submit-email" />)}

            {render('age', {
              label: '年龄',
              rules: {
                validator: (value) => {
                  const age = Number(value);
                  return age > 0 && age < 120 ? null : '请输入有效年龄';
                },
              },
            })(<input type="number" id="submit-age" />)}

            <button id="submit-btn" onClick={handleSubmit}>
              提交
            </button>
          </div>
        );
      };

      const { container } = testRender(<TestDemo />);

      // 填写表单
      const nameInput = container.querySelector(
        '#submit-name',
      ) as HTMLInputElement;
      const emailInput = container.querySelector(
        '#submit-email',
      ) as HTMLInputElement;
      const ageInput = container.querySelector(
        '#submit-age',
      ) as HTMLInputElement;
      const submitBtn = container.querySelector(
        '#submit-btn',
      ) as HTMLButtonElement;

      fireEvent.change(nameInput, { target: { value: '张三' } });
      fireEvent.change(emailInput, {
        target: { value: 'zhangsan@example.com' },
      });
      fireEvent.change(ageInput, { target: { value: '25' } });

      fireEvent.click(submitBtn);

      await waitFor(() => {
        expect(onSubmit).toHaveBeenCalledWith({
          name: '张三',
          email: 'zhangsan@example.com',
          age: '25', // 输入框的值是字符串
        });
      });
    });

    test('复杂的动态表单场景', async () => {
      const TestDemo = () => {
        const { model, render, validate, forceUpdate } = useForm({
          users: [{ id: getUuid(), name: '', email: '' }],
        });

        const addUser = () => {
          model.users.push({ id: getUuid(), name: '', email: '' });
          forceUpdate();
        };

        const removeUser = (index: number) => {
          model.users.splice(index, 1);
          forceUpdate();
        };

        const handleValidate = async () => {
          try {
            await validate();
            console.log('验证通过:', model);
          } catch (error) {
            console.error('验证失败:', error);
          }
        };

        return (
          <div>
            {model.users.map((user, index) => (
              <div key={user.id} id={`user-${index}`}>
                <h3>用户 {index + 1}</h3>
                {render(`users.${index}.name`, {
                  label: '姓名',
                  rules: { required: '请输入姓名' },
                })(<input id={`name-${index}`} />)}

                {render(`users.${index}.email`, {
                  label: '邮箱',
                  rules: { required: '请输入邮箱' },
                })(<input id={`email-${index}`} />)}

                <button
                  id={`remove-${index}`}
                  onClick={() => removeUser(index)}
                >
                  删除用户
                </button>
              </div>
            ))}

            <button id="add-user" onClick={addUser}>
              添加用户
            </button>
            <button id="validate-all" onClick={handleValidate}>
              验证所有
            </button>
          </div>
        );
      };

      const { container } = testRender(<TestDemo />);

      // 添加用户
      const addButton = container.querySelector(
        '#add-user',
      ) as HTMLButtonElement;
      fireEvent.click(addButton);

      await vi.waitFor(() => {
        const users = container.querySelectorAll('[id^="user-"]');
        expect(users.length).toBe(2);
      });

      // 填写第一个用户信息
      const name0 = container.querySelector('#name-0') as HTMLInputElement;
      const email0 = container.querySelector('#email-0') as HTMLInputElement;

      fireEvent.change(name0, { target: { value: '用户1' } });
      fireEvent.change(email0, { target: { value: 'user1@example.com' } });

      expect(name0.value).toBe('用户1');
      expect(email0.value).toBe('user1@example.com');
    });
  });
  describe('dymic array test', async () => {
    test('assignment', async () => {
      const TestDemo = React.forwardRef(({}, ref) => {
        const { render, model, forceUpdate } = useForm<{
          list: Array<{ uid: string; value: string }>;
        }>({ list: [] });
        const renderMapList = model.list.map((v, index) => {
          return (
            <div id={v.uid} key={v.uid}>
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
            <div id={v.uid} key={v.uid}>
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

      const { container } = testRender(<TestDemo ref={demoRef} />);
      const addItem = (count: number = 1) => {
        const button = container.querySelector(
          '#dymic-remove-add-button',
        ) as HTMLButtonElement;
        Array.from({ length: count }, (x, y) => y).forEach(() => {
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
    test('add', async ({ expect }) => {
      const TestDemo = React.forwardRef((props, ref) => {
        const { render, model, forceUpdate } = useForm<{
          list: Array<{ uid: string; value: string }>;
        }>({ list: [] });
        const renderMapList = model.list.map((v, index) => {
          return (
            <div key={v.uid} id={v.uid}>
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
  });
});
