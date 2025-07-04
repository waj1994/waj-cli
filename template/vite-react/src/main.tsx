import { createRoot } from 'react-dom/client';
import App from './App.tsx';

import '@ant-design/v5-patch-for-react-19';
import 'virtual:uno.css';
import './assets/styles/index.less';

createRoot(document.getElementById('root')!).render(<App />);
