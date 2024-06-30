---
title: UI
group:
  title: Docs
  order: 1
order: 6
toc: content
---

# UI Integration

**React Form Simple** won't disrupt your existing code. It seamlessly integrates with the UI library you're using in your project.

### <Mdh>Material-UI</Mdh>

Here's an example of integrating with Material-UI. This example includes form elements such as dropdowns, input fields, and checkboxes. It defines a non-empty validation rule for a form item named "name". When the value of the "name" form item is empty, it prompts an error notification and changes the input box color to red to indicate an error.

<code src="../demos/integrationUI/_material-ui.tsx"></code>

### <Mdh>Ant Design</Mdh>

_Note_: The render configuration of the Select component passes the formatChangeValue function. This is because the Select component of Ant Design does not return a standard event object in the onChange event, but rather a specific value.

<code src="../demos/integrationUI/_antd.tsx"></code>
