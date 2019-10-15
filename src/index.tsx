import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Router } from './router';
import './scss/index.scss';

ReactDOM.render(<Router />, document.getElementById('shell'));
serviceWorker.unregister();
