---
title: Introduction
group:
  title: Start
  order: 0
toc: content
nav: Docs
---

# Introduction

Form building shouldn't be painful. React Form Simple will allow you to write less code and have better performance.

### What is React-form-simple?

**React form simple** is a lightweight, controllable, and extensible form library based on React. It provides a comprehensive solution covering data binding, validation rules, error handling, and UI updates. Its design philosophy is to simplify the development process, enhance efficiency, and provide developers with highly flexible and extensible tools for building complex form applications efficiently.

**React form simple** not only integrates its own features but also offers highly extensible interfaces, making it easy to integrate with third-party UI components.

Below is a basic example:

```jsx | pure
import React, { useState } from 'react';
import { useForm } from 'react-form-simple';
export default () => {
  const { render, model } = useForm({ name: '', age: '' });

  const [modelState, setModelState] = useState('');

  const renderName = render('name')(<input className="input" />);

  const renderAge = render('age')(<input className="input" />);

  const renderSubmit = (
    <button onClick={() => setModelState(JSON.stringify(model))}>submit</button>
  );

  return (
    <>
      {renderName}
      {renderAge}
      {renderSubmit}
      {modelState}
    </>
  );
};
```

**Demo Display**

```jsx
/**
 * inline: true
 */
import React, { useState } from 'react';
import { useForm } from 'react-form-simple';
import Demo from '@components/Demo';
export default () => {
  const { render, model } = useForm({ name: '', age: '' });

  const [modelState, setModelState] = useState('');

  const renderName = render('name')(<input />);

  const renderAge = render('age')(<input />);

  const renderSubmit = (
    <button onClick={() => setModelState(JSON.stringify(model))}>submit</button>
  );

  return (
    <Demo>
      {renderName}
      {renderAge}
      {renderSubmit}
      {modelState}
    </Demo>
  );
};
```

The above demonstrates two importing steps:

_Initializing the Model_: Initialize form model data using useForm.

_Rendering_: Construct a controlled bridge between the view and the model using the render function.

Yes, you don't need to worry about any controlled logic. It makes controlled forms so simple. You might have some questions about usage; don't worry, the following chapters will detail the usage specifics.

## Feature

### <Mdh version="">Simple and efficient data binding</Mdh>

Achieve controlled form operations with just a few lines of code, without worrying about complex controlled logic and processes. Focus solely on the controlled outcomes and how to apply controlled states.

```jsx | pure
import { useForm } from 'react-form-simple';
export default () => {
  const { render } = useForm({ name: '', age: '' });

  const renderName = render('name')(<input />);

  const renderAge = render('age')(<input />);
};
```

### <Mdh version="">Flexible error handling mechanism</Mdh>

Provide a flexible error handling mechanism that supports real-time display of error messages and custom error prompts, whether it's handling errors for individual fields or the entire form.

#### Built-in validation

You can use the built-in validators in the library to validate the incoming rules.

```jsx | pure
import React from 'react';
import { useForm } from 'react-form-simple';

export default function App() {
  const { render } = useForm({ name: 'name' });

  return render('name', {
    rules: [
      { required: 'Please Input' },
      {
        validator(value) {
          return String(value).length > 9 ? 'Max Limit' : '';
        },
      },
    ],
  })(<input />);
}
```

#### Manual validation

You can even manually call the API to seamlessly integrate with third-party validators, ensuring that its behavior aligns perfectly with internal validation.

```jsx | pure
import React from 'react';
import { useForm } from 'react-form-simple';

export default function App() {
  const { render, setError } = useForm({ name: 'name' });

  return (
    <>
      {render('name')(<input />)}
      <button
        onClick={() => {
          setError('Please Input');
        }}
      >
        validate
      </button>
    </>
  );
}
```

### <Mdh version="">Efficient UI updates</Mdh>

The rendering of each form item is completely isolated, avoiding page lag when dealing with large dynamic data. Rendering between two form items, like the following, doesn't affect each other and won't cause a full-page re-render.

```jsx | pure
import React from 'react';
import { useForm } from 'react-form-simple';

export default function App() {
  const { render } = useForm({ name: 'name', age: '' });

  return (
    <>
      {render('name')(<input />)}
      {render('age')(<input />)}
    </>
  );
}
```

### <Mdh version="">Powerful data observation feature</Mdh>

By monitoring real-time changes in form data, ensure data synchronization, thereby enhancing the form's dynamic responsiveness.

```jsx | pure
import React from 'react';
import { useForm } from 'react-form-simple';

export default function App() {
  const { render, useWatch } = useForm({ name: 'name', age: '' });

  useWatch(
    ({ model }) => [model.name, model.age],
    (newValue, preValue) => {},
  );

  return (
    <>
      {render('name')(<input />)}
      {render('age')(<input />)}
    </>
  );
}
```

### <Mdh version="">Flexible usage and layout</Mdh>

Supports both manual layout and built-in layouts, allowing developers to choose the most suitable approach based on their specific needs.

#### Adding labels to form items

```jsx | pure
import React from 'react';
import { useForm } from 'react-form-simple';

export default function App() {
  const { render } = useForm({ name: 'name', age: '' });

  return render('name', { label: 'name', labelPosition: 'top' })(<input />);
}
```

### <Mdh version="">Easily integrate third-party UI libraries</Mdh>

Support seamless integration with various third-party UI libraries. Below is a straightforward example demonstrating integration with Material UI.

```jsx | pure
import { TextField } from '@mui/material';
import React from 'react';
import { useForm } from 'react-form-simple';

export default function App() {
  const { render } = useForm({ name: '' }, { labelPosition: 'top' });

  return render('name', {
    label: 'name',
    rules: { required: 'please Input' },
    requireIndicator: true,
    defineProps({ isError }) {
      return { error: isError };
    },
  })(<TextField style={{ width: '300px' }} placeholder="Please Input" />);
}
```

### <Mdh version="">Highly extensible interfaces</Mdh>

Provide highly extensible interfaces to meet complex requirements and customization scenarios. Developers can customize the form control logic according to their specific needs, flexibly adapting to various business requirements.

```jsx | pure
import React from 'react';
import { FormItem } from 'react-form-simple';

function App() {
  return (
    <>
      <FormItem
        bindId="name"
        getContent={({ attrs }) => <input className="input" {...attrs} />}
      />
      <FormItem
        bindId="select"
        getContent={({ attrs }) => (
          <select {...attrs}>
            <option value="name">name</option>
            <option value="age">age</option>
            <option value="email">email</option>
          </select>
        )}
      />
    </>
  );
}

export default App;
```

### <Mdh version="">Full type Inference</Mdh>

![type gif](./imgs/type.gif)

### <Mdh version="">Lightweight Enough</Mdh>

React Form Simple has almost no dependencies on third-party libraries and its bundled size is only 130KB.
