import { Sandpack } from '@codesandbox/sandpack-react';
import { atomDark } from '@codesandbox/sandpack-themes';
import React, { useEffect } from 'react';
import designSystemRaw from '../../../design-system/build-sandpack';
import './index.less';

export function ReactFormSandpack() {
  useEffect(() => {
    setTimeout(() => {
      const iframe = document.getElementsByTagName('iframe');
      console.log({ iframe });
    });
  }, []);

  return (
    <div className="react-form-simple-codesandbox">
      <Sandpack
        template="react"
        theme={atomDark}
        files={{
          '/App.js': `
 
          export default function Sample() {
            return (
              <>
                111
              </>
            );
          }
          `,
          '/node_modules/@internals/design-system/package.json': {
            hidden: true,
            code: JSON.stringify({
              name: '@design-system',
              main: './index.js',
            }),
          },
          '/node_modules/@internals/design-system/index.js': {
            hidden: true,
            code: designSystemRaw,
          },
        }}
        options={{
          showRefreshButton: false,
          showLineNumbers: true,
          editorHeight: 500,
          initMode: 'user-visible',
          showInlineErrors: true,
        }}
      />
    </div>
  );
}

export default ReactFormSandpack;
