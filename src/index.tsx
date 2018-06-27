import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Hello from './components/hello';
import './index.css';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
  <Hello name='TypeScript' enthusiasmLevel={2} />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
