import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../page/login/Login';
import Dashboard from '../page/dashboard/Dashboard';
import Shipping from '../page/shipping/Shipping';
import Profile from '../page/profile/Profile';

function Index() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/shipping" element={<Shipping />} />
                </Routes>
            </Router>
        </div>
    );
}

export default Index;
