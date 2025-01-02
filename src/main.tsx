import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from '#/App';

import './modules/app.module';

import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
