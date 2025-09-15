import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Greeting from './Greeting.jsx';
import './Greeting.css';
import './index.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Greeting />
  </StrictMode>,
)
