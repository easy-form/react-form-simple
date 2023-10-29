import hljs from 'highlight.js/lib/core';
import typescript from 'highlight.js/lib/languages/typescript';
import 'highlight.js/styles/atom-one-dark.css';
import React, { useEffect, useRef } from 'react';
import './index.less';

hljs.registerLanguage('typescript', typescript);

export const CodeLight = () => {
  const codeRef = useRef(null);

  useEffect(() => {
    if (!codeRef.current) return;
    const codeElement = codeRef.current as HTMLElement;
    const codeText =
      require('../../../metadata/demos/hero/format.json').content;

    let index = 0;
    const timer = setInterval(() => {
      const slice = codeText.slice(0, index + 1);
      codeElement.innerHTML = hljs.highlight(slice, {
        language: 'typescript',
      }).value;
      index++;

      if (index === codeText.length) {
        clearInterval(timer);
      }
    }, 30);

    return () => {
      clearInterval(timer);
    };
  }, [codeRef]);

  return (
    <div className="theme-atom-one-dark-wrap">
      <pre className="theme-atom-one-dark hljs">
        <code>
          <div ref={codeRef}></div>
        </code>
      </pre>
    </div>
  );
};
