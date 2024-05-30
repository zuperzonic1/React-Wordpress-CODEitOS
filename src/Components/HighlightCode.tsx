import React, { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-tsx';
import 'prismjs/themes/prism-okaidia.css';


const HighlightCode: React.FC = () => {
  useEffect(() => {
    const codeBlocks = document.querySelectorAll('code');
    codeBlocks.forEach((block) => {
      Prism.highlightElement(block as HTMLElement);
    });
  }, []);

  return null;
};

export default HighlightCode;
