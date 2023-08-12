import React from "react";
import ReackDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReackDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);