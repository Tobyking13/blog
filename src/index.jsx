import React from 'react';
import { createRoot } from 'react-dom/client'
import App from './app';
import 'materialize-css/dist/js/materialize.min.js';
import M from 'materialize-css'

const container = document.getElementById('root');

createRoot(container).render(<App />)