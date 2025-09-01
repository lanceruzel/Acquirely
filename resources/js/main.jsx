import './bootstrap';

import ReactDOM from 'react-dom/client';
import App from './App';
import { StrictMode } from 'react'

ReactDOM.createRoot(document.getElementById('app')).render(
    <StrictMode>
        <App />
    </StrictMode>
);
