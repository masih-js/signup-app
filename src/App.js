import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import SignUp from './components/SignUp';
import Login from './components/Login';

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Navigate to="/signup" />} />
            </Routes>
        </div>
    );
};

export default App;