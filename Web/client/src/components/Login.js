import React, { useState, useContext, useEffect } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import AuthContext from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import '../styles.css';

const Login = () => {
    const authContext = useContext(AuthContext);
    const { login, isAuthenticated, error, clearErrors } = authContext;

    const [user, setUser] = useState({
        email: '',
        password: '',
    });

    const [showError, setShowError] = useState(false);
    const navigate = useNavigate();

    const { email, password } = user;