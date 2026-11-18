import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import XgLab from './XgLab';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <XgLab />
    </StrictMode>,
);
