import { Sandpack } from '@codesandbox/sandpack-react';
import { atomDark } from '@codesandbox/sandpack-themes';
import React from 'react';
import './index.less';

const sandpack = require('../../metadata/demos/format/sandpack.json');

export function ReactFormSandpack() {
  return (
    <div className="react-form-simple-codesandbox">
      <Sandpack
        template="react"
        theme={atomDark}
        customSetup={{
          dependencies: {
            'react-form-simple': 'latest',
          },
        }}
        files={{
          '/App.js': sandpack.content,
        }}
        options={{
          recompileMode: 'immediate',
          showRefreshButton: false,
          showLineNumbers: true,
          editorHeight: 500,
          initMode: 'user-visible',
          showInlineErrors: true,
          showConsole: true,
          autoReload: true,
        }}
      />
    </div>
  );
}

export default ReactFormSandpack;
