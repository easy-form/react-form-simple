<div align="center">
<a href="https://easy-form.github.io/react-form-simple" target="_black">
  <img src="./public//logo.jpg" alt="React-form-simple logo" width="100%">
</a>
</div>

<br />
<br />

<div align="center">

[![NPM version](https://img.shields.io/npm/v/react-form-simple.svg?style=flat)](https://npmjs.org/package/react-form-simple) [![NPM downloads](http://img.shields.io/npm/dm/react-form-simple.svg?style=flat)](https://npmjs.org/package/react-form-simple) ![Static Badge](https://img.shields.io/badge/react-libaray-blue) ![Static Badge](https://img.shields.io/badge/react-form-blue) ![Static Badge](https://img.shields.io/badge/typescript-8A2BE2) ![NPM](https://img.shields.io/npm/l/react-form-simple) ![npm bundle size (version)](https://img.shields.io/bundlephobia/minzip/react-form-simple/1.0.1) ![npm bundle size (version)](https://img.shields.io/bundlephobia/min/react-form-simple/1.0.1)

<div>
  English | <a href="https://github.com/easy-form/react-form-simple/blob/master/README.md">简体中文</a>
</div>

</div>

<br />

## 📚 Documentation

- [English](http://www.baidu.com)
- [简体中文](https://easy-form.github.io/react-form-simple)

## ✨ Features

- By creating an observable object to observe the model operation of the form, the controlled form items are assigned directly through `_.`.

- You can complete form control with just a few lines of code. You don't need to care about the controlled logic or the controlled process. You only need to know the controlled results and how to apply your controlled state.

- The rendering between each form item is automatically completely isolated, without the need for self organizing component isolation. This will enable faster response time after form input and greatly avoid page lag caused by large dynamic data.

- With data observation function, it can perform single or unified observation and monitoring of the entire form or a specific form item in certain scenarios. It can subscribe to values where you need to render with the latest values of form items.

- Flexible usage methods, flexible page layout combinations, developers can use certain methods and built-in layouts according to their preferences and scenarios. In most scenarios, developers do not need to manually lay out.
- Minimalist API design, in the process of operating forms, simply introducing two APIs can complete most of the work.

-Highly scalable form interface for easy customization of forms.

- Easy integration with third-party UI.
- Complete type inference.

<br />

## 📦 Installing

Using NPM

```
npm install react-form-simple
```

Using Yarn

```
yarn add react-form-simple
```

<br />

## 🔨 Usage

Create form items using the 'render' function

```js
import { useForm } from 'react-form-simple';

const { render } = useForm(fields, [config]);
```

Create form items in component form

```js
import { Form, FormItem } from 'react-form-simple';
```

<br />

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

<br />

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
