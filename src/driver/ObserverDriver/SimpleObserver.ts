import { isEqual } from 'react-form-simple/utils/util';

// 极简观察者管理器
export class SimpleObserver<T = any> {
  private observers = new Map<
    string | symbol,
    {
      callback: (value: T) => void;
      cleanup?: () => void;
      subscribeFn?: (model: { model: T }) => any;
      prevValue?: any;
      isSubscribeMode?: boolean;
      watchCallback?: (value: any, prevValue?: any) => void;
      contextProps?: any;
      lastNotifyTime?: number;
    }
  >();

  // 注册观察者 - 支持多种调用方式
  register(
    key: string | symbol,
    contextPropsOrCallback: any,
    subscribeFnOrCleanup?: any,
    callbackOrUndefined?: any,
  ) {
    console.log(
      'SimpleObserver.register called with key:',
      key,
      'observers count before:',
      this.observers.size,
    );

    if (typeof contextPropsOrCallback === 'function') {
      // 新的简单API: register(key, callback, cleanup?)
      this.observers.set(key, {
        callback: contextPropsOrCallback,
        cleanup: subscribeFnOrCleanup,
      });
    } else if (callbackOrUndefined) {
      // 4参数调用: register(key, contextProps, subscribeFn, callback)
      const contextProps = contextPropsOrCallback;
      const subscribeFn = subscribeFnOrCleanup;
      const callback = callbackOrUndefined;

      if (typeof callback === 'function' && callback.length >= 2) {
        // watch模式: register(key, contextProps, subscribeFn, watchCallback)
        const wrappedCallback = (model: T) => {
          if (subscribeFn) {
            const currentValue = subscribeFn({ model });
            const observer = this.observers.get(key);
            if (observer) {
              const prevValue = observer.prevValue;
              if (!isEqual(currentValue, prevValue)) {
                callback(currentValue, prevValue);
                observer.prevValue = currentValue;
              }
            }
          }
        };

        this.observers.set(key, {
          callback: wrappedCallback,
          subscribeFn,
          watchCallback: callback,
          contextProps,
          prevValue: subscribeFn
            ? subscribeFn({ model: contextProps.model })
            : undefined,
        });
      } else {
        // subscribe模式: register(key, contextProps, subscribeFn, subscribeCallback)
        const wrappedCallback = () => {
          if (subscribeFn && callback) {
            const currentValue = subscribeFn({ model: contextProps.model });
            callback(currentValue);
          }
        };

        this.observers.set(key, {
          callback: wrappedCallback,
          subscribeFn,
          isSubscribeMode: true,
          contextProps,
          prevValue: subscribeFn
            ? subscribeFn({ model: contextProps.model })
            : undefined,
        });
      }
    } else {
      // 3参数调用: register(key, contextProps, subscribeFn) - 这种情况不应该在当前代码中使用
      const contextProps = contextPropsOrCallback;
      const subscribeFn = subscribeFnOrCleanup;

      // 这种情况下没有回调函数，所以创建一个空的包装器
      const wrappedCallback = () => {
        // 没有回调，什么都不做
      };

      this.observers.set(key, {
        callback: wrappedCallback,
        subscribeFn,
        isSubscribeMode: true,
        contextProps,
        prevValue: subscribeFn
          ? subscribeFn({ model: contextProps.model })
          : undefined,
      });
    }

    console.log(
      'SimpleObserver.register observers count after:',
      this.observers.size,
    );
  }

  // 通知所有观察者
  notify(value: T, path?: string) {
    console.log(
      'SimpleObserver.notify called with path:',
      path,
      'observers count:',
      this.observers.size,
    );

    // 复制观察者列表，避免在遍历过程中被修改
    const observersCopy = new Map(this.observers);

    observersCopy.forEach(
      ({ callback, isSubscribeMode, subscribeFn, contextProps }, key) => {
        try {
          if (typeof callback === 'function') {
            // 检查是否应该通知这个观察者
            let shouldNotify = true;

            // 如果有路径信息和subscribeFn，检查观察者是否关心这个路径的变化
            if (path && subscribeFn && contextProps) {
              const observerPath =
                this.getObserverPathFromSubscribeFn(subscribeFn);

              console.log(
                'Observer path:',
                observerPath,
                'Change path:',
                path,
                'Key:',
                key,
              );

              // 如果观察者路径是空字符串，表示监听所有变化
              if (observerPath === '') {
                shouldNotify = true;
              } else if (observerPath) {
                // 检查变化的路径是否是观察者路径的子路径或相同路径
                shouldNotify =
                  path.startsWith(observerPath) ||
                  observerPath.startsWith(path);
              }
            }

            console.log(
              'Should notify:',
              shouldNotify,
              'isSubscribeMode:',
              isSubscribeMode,
            );

            if (shouldNotify) {
              console.log(
                'Before callback, observers count:',
                this.observers.size,
              );
              if (isSubscribeMode) {
                // subscribe模式：重新获取最新值并调用
                console.log('Calling subscribe mode callback');
                (callback as any)();
              } else {
                // watch模式传入value
                console.log('Calling watch mode callback');
                callback(value);
              }
              console.log(
                'After callback, observers count:',
                this.observers.size,
              );
            }
          }
        } catch (error) {
          console.error('Observer callback error:', error);
        }
      },
    );

    console.log(
      'notify completed, final observers count:',
      this.observers.size,
    );
  }

  // 从subscribeFn中推断观察者关心的路径
  private getObserverPathFromSubscribeFn(subscribeFn: any): string | null {
    try {
      // 创建一个代理对象来捕获访问的路径
      const pathCapture: string[] = [];
      const captureProxy = this.createPathCaptureProxy(pathCapture);

      // 调用subscribeFn来捕获它访问的路径
      const result = subscribeFn({ model: captureProxy });

      // 如果 subscribeFn 返回的是代理对象本身，说明它在订阅整个模型
      if (result === captureProxy) {
        return ''; // 空字符串表示监听根级别的所有变化
      }

      // 返回捕获到的路径
      return pathCapture.length > 0 ? pathCapture[0] : '';
    } catch (error) {
      // 如果捕获失败，返回空字符串（表示监听所有变化）
      return '';
    }
  }

  // 创建路径捕获代理
  private createPathCaptureProxy(
    pathCapture: string[],
    currentPath: string = '',
  ): any {
    return new Proxy(
      {},
      {
        get: (target, prop) => {
          if (typeof prop === 'string') {
            const newPath = currentPath ? `${currentPath}.${prop}` : prop;
            pathCapture.push(newPath);

            // 返回一个新的代理以支持深层访问
            return this.createPathCaptureProxy(pathCapture, newPath);
          }
          return undefined;
        },
      },
    );
  }

  // 移除观察者 - 兼容原有API
  remove(key: string | symbol) {
    const observer = this.observers.get(key);
    if (observer) {
      observer.cleanup?.();
      this.observers.delete(key);
    }
  }

  // 兼容原有API的destroy方法
  destroy(key: string | symbol) {
    console.log(
      'SimpleObserver.destroy called with key:',
      key,
      'observers count before:',
      this.observers.size,
    );
    this.remove(key);
    console.log(
      'SimpleObserver.destroy observers count after:',
      this.observers.size,
    );
  }

  // 清除所有观察者
  clear() {
    this.observers.forEach(({ cleanup }) => cleanup?.());
    this.observers.clear();
  }

  // 获取观察者数量
  size() {
    return this.observers.size;
  }
}
