<div align="center">
<a href="https://easy-form.github.io/react-form-simple" target="_black">
  <img src="./public//logo.jpg" alt="React-form-simple logo" width="100%">
</a>
</div>

<br />
<br />

<div align="center">

[![NPM version](https://img.shields.io/npm/v/react-form-simple.svg?style=flat)](https://npmjs.org/package/react-form-simple)
[![NPM downloads](http://img.shields.io/npm/dm/react-form-simple.svg?style=flat)](https://npmjs.org/package/react-form-simple)
![Static Badge](https://img.shields.io/badge/react-libaray-blue)
![Static Badge](https://img.shields.io/badge/react-form-blue)
![Static Badge](https://img.shields.io/badge/typescript-8A2BE2)
![NPM](https://img.shields.io/npm/l/react-form-simple)
![npm bundle size (version)](https://img.shields.io/bundlephobia/minzip/react-form-simple/1.0.1)
![npm bundle size (version)](https://img.shields.io/bundlephobia/min/react-form-simple/1.0.1)

<div>
  简体中文 | <a href="http://www.baidu.com">English</a>
</div>

</div>

<br />

## 📚 Documentation

- [English](http://www.baidu.com)
- [简体中文](http://www.baidu.com)

## ✨ Features

- 通过创建一个可观察对象来观察表单的模型操作, 表单项的受控直接通过`_.` 赋值。

- 简单几行代码就可以完成表单受控, 无需关心受控逻辑, 无需关心受控过程, 只需要知道受控结果和如何应用你的受控状态。
- 每个表单项之间的渲染自动完全隔离, 不需要自行组织组件隔离。这将能够更快的处理表单输入后的响应速度, 以及很大程度的避免在大型动态数据下造成的页面卡顿。
- 具有数据观测功能, 可以在某些场景下对整个表单或者某个具体的表单项进行单一或者统一的观察监测, 可以在你需要用表单项最新的值进行渲染的地方进行值的订阅。
- 灵活的使用方式, 灵活的页面布局组合, 开发者可以根据自己的喜好和场景使用某种方式以及内置布局。在大多数场景下, 无需开发者手动布局。
- 简约的 API 设计, 在操作表单的过程中, 简单的只需要引入两个 API, 就可以完成大部分工作。
- 高度可扩展的表单接口, 轻易定制化表单。
- 与第三方 UI 轻易集成。
- 完整的类型推断。

## 📦 Installing

使用 npm

```
npm install react-form-simple
```

使用 yarn

```
yarn add react-form-simple
```

## 🔨 Usage

使用`render`函数创建表单项

```js
import { useForm } from 'react-form-simple';

const { render } = useForm(fields, [config]);
```

使用组件形式创建表单项

```js
import { Form, FormItem } from 'react-form-simple';
```

## 💻 Demo

```js
import Button from '@components/Button';
import React from 'react';
import { useForm } from 'react-form-simple';

export default function App() {
  const { render, model } = useForm({
    name: '',
    age: '',
  });
  const renderName = render('name')(<input className="input" />);

  const renderAge = render('age')(<input className="input" />);

  const renderSubmit = (
    <Button onClick={() => console.log(model)}>submit</Button>
  );
  return (
    <>
      {renderName}
      {renderAge}
      {renderSubmit}
    </>
  );
}
```

## 🎧 Watch

```js
import Button from '@components/Button';
import React from 'react';
import { useForm } from 'react-form-simple';

export default function App() {
  const { render, model, useWatch } = useForm({ name: '' });

  const renderName = render('name')(<input className="input" />);

  useWatch(
    ({ model }) => [model.name],
    (value) => {
      /** code */
    },
  );

  return (
    <>
      {renderName}
      {renderAge}
    </>
  );
}
```

## 🤝 LICENSE

MIT
