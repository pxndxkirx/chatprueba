import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { HashRouter} from 'react-router-dom'
import App from './components/inicio/inicio';


const app = document.getElementById('chat');
render(<HashRouter><App /></HashRouter>,app);