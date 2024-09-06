import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

import Router from './router';

import './assets/styles/index.less';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <HashRouter>
    <Router />
  </HashRouter>
);
